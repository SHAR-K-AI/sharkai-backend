import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateSkills1747506269920 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Таблиця скілів
        await queryRunner.createTable(
            new Table({
                name: "skills",
                columns: [
                    {
                        name: "id",
                        type: "serial", // автоінкремент PostgreSQL
                        isPrimary: true,
                    },
                    {
                        name: "category",
                        type: "varchar",
                        length: "255",
                        isNullable: true,
                        comment: "Категорія навички (опціонально)",
                    },
                    {
                        name: "created_at",
                        type: "timestamptz",
                        isNullable: false,
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamptz",
                        isNullable: false,
                        default: "now()",
                        // оновлення цього поля краще робити тригером або вручну
                    },
                ],
            }),
            true
        );

        // Таблиця перекладів скілів
        await queryRunner.createTable(
            new Table({
                name: "skills_translations",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "skill_id",
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
                        length: "100",
                        isNullable: false,
                        comment: "Поле, що перекладається (наприклад, name, description)",
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
                        name: "uq_skill_translation_unique",
                        columnNames: ["skill_id", "language_code", "field"],
                    },
                ],
            }),
            true
        );

        // FK між перекладами та скілами
        await queryRunner.createForeignKey(
            "skills_translations",
            new TableForeignKey({
                columnNames: ["skill_id"],
                referencedTableName: "skills",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Спершу знімаємо FK для уникнення помилок
        const translationTable = await queryRunner.getTable("skills_translations");
        if (translationTable) {
            const fk = translationTable.foreignKeys.find(fk => fk.columnNames.indexOf("skill_id") !== -1);
            if (fk) {
                await queryRunner.dropForeignKey("skills_translations", fk);
            }
        }

        await queryRunner.dropTable("skills_translations");
        await queryRunner.dropTable("skills");
    }
}
