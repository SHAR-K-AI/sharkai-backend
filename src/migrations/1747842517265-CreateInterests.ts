import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateInterests1747842517265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Основна таблиця інтересів
        await queryRunner.createTable(
            new Table({
                name: "interests",
                columns: [
                    {
                        name: "id",
                        type: "serial",       // автоінкрементний integer у PostgreSQL
                        isPrimary: true,
                    },
                    {
                        name: "category",
                        type: "varchar",
                        isNullable: true,
                        comment: "Категорія інтересу (опційно)"
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
                    },
                ],
                comment: "Таблиця інтересів"
            }),
            true
        );

        // Таблиця перекладів для інтересів
        await queryRunner.createTable(
            new Table({
                name: "interests_translations",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "interest_id",
                        type: "integer",
                        isNullable: false,
                    },
                    {
                        name: "language_code",
                        type: "varchar",
                        length: "5",
                        isNullable: false,
                        comment: "Код мови, напр. 'en', 'uk'"
                    },
                    {
                        name: "field",
                        type: "varchar",
                        isNullable: false,
                        comment: "Назва поля перекладу, напр. 'name', 'description'"
                    },
                    {
                        name: "value",
                        type: "text",
                        isNullable: false,
                        comment: "Значення перекладу"
                    },
                ],
                indices: [
                    {
                        name: "IDX_interests_translation_unique",
                        columnNames: ["interest_id", "language_code", "field"],
                        isUnique: true,
                    }
                ],
                comment: "Переклади для інтересів"
            }),
            true
        );

        // Створюємо зовнішній ключ на interests
        await queryRunner.createForeignKey(
            "interests_translations",
            new TableForeignKey({
                columnNames: ["interest_id"],
                referencedTableName: "interests",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Спершу видаляємо FK, щоб уникнути помилок
        const table = await queryRunner.getTable("interests_translations");
        if (table) {
            const foreignKey = table.foreignKeys.find(fk => fk.columnNames.includes("interest_id"));
            if (foreignKey) {
                await queryRunner.dropForeignKey("interests_translations", foreignKey);
            }
        }

        await queryRunner.dropTable("interests_translations");
        await queryRunner.dropTable("interests");
    }

}
