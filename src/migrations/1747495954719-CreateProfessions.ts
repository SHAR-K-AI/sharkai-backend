import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateProfessions1747495954719 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Таблиця професій
        await queryRunner.createTable(
            new Table({
                name: "professions",
                columns: [
                    {
                        name: "id",
                        type: "serial", // автоінкремент PostgreSQL
                        isPrimary: true,
                    },
                    {
                        name: "category_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "mbti",
                        type: "jsonb",
                        isNullable: true,
                        comment: "Результати MBTI для професії",
                    },
                    {
                        name: "riasec",
                        type: "jsonb",
                        isNullable: true,
                        comment: "RIASEC профіль",
                    },
                    {
                        name: "gallup",
                        type: "jsonb",
                        isNullable: true,
                        comment: "Gallup профіль",
                    },
                    {
                        name: "bigFiveIdeal",
                        type: "jsonb",
                        isNullable: true,
                        comment: "Ідеальний Big Five профіль",
                    },
                    {
                        name: "asvab",
                        type: "jsonb",
                        isNullable: true,
                        comment: "ASVAB дані",
                    },
                    {
                        name: "salary_range",
                        type: "jsonb",
                        isNullable: true,
                        comment: "Діапазон зарплати, наприклад, {min: number, max: number}",
                    },
                    {
                        name: "demand",
                        type: "int",
                        isNullable: false,
                        default: 0,
                        comment: "Попит на професію",
                    },
                    {
                        name: "created_at",
                        type: "timestamptz",
                        default: "now()",
                        isNullable: false,
                    },
                    {
                        name: "updated_at",
                        type: "timestamptz",
                        default: "now()",
                        isNullable: false,
                        // Для оновлення updated_at рекомендується тригер або ручне оновлення в коді
                    },
                ],
            }),
            true
        );

        // Зовнішній ключ для category_id
        await queryRunner.createForeignKey(
            "professions",
            new TableForeignKey({
                columnNames: ["category_id"],
                referencedTableName: "profession_categories",
                referencedColumnNames: ["id"],
                onDelete: "SET NULL", // При видаленні категорії поле category_id буде null
                onUpdate: "CASCADE",
            })
        );

        // Таблиця перекладів професій
        await queryRunner.createTable(
            new Table({
                name: "professions_translations",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "profession_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "language_code",
                        type: "varchar",
                        length: "5",
                        isNullable: false,
                    },
                    {
                        name: "field",
                        type: "varchar",
                        isNullable: false,
                        comment: "Назва перекладного поля (наприклад, title, description)",
                    },
                    {
                        name: "value",
                        type: "text",
                        isNullable: false,
                        comment: "Перекладене значення",
                    },
                ],
                uniques: [
                    {
                        name: "uq_profession_translation_unique",
                        columnNames: ["profession_id", "language_code", "field"],
                    },
                ],
            }),
            true
        );

        // FK для професії у таблиці перекладів
        await queryRunner.createForeignKey(
            "professions_translations",
            new TableForeignKey({
                columnNames: ["profession_id"],
                referencedTableName: "professions",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Видалення FK перед таблицями для уникнення помилок
        const translationTable = await queryRunner.getTable("professions_translations");
        if (translationTable) {
            const fk = translationTable.foreignKeys.find(fk => fk.columnNames.indexOf("profession_id") !== -1);
            if (fk) await queryRunner.dropForeignKey("professions_translations", fk);
        }

        const professionTable = await queryRunner.getTable("professions");
        if (professionTable) {
            const fk = professionTable.foreignKeys.find(fk => fk.columnNames.indexOf("category_id") !== -1);
            if (fk) await queryRunner.dropForeignKey("professions", fk);
        }

        await queryRunner.dropTable("professions_translations");
        await queryRunner.dropTable("professions");
    }
}
