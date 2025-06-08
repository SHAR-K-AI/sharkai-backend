import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateEmploymentTypes1747842576639 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Основна таблиця типів зайнятості
        await queryRunner.createTable(
            new Table({
                name: "employment_types",
                columns: [
                    {
                        name: "id",
                        type: "serial", // простіше і PostgreSQL-оптимально
                        isPrimary: true,
                    },
                    {
                        name: "category",
                        type: "varchar",
                        isNullable: true,
                        comment: "Категорія типу зайнятості (опціонально)",
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
                comment: "Типи зайнятості",
            }),
            true
        );

        // Таблиця перекладів для типів зайнятості
        await queryRunner.createTable(
            new Table({
                name: "employment_types_translations",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "employment_type_id",
                        type: "integer",
                        isNullable: false,
                    },
                    {
                        name: "language_code",
                        type: "varchar",
                        length: "5",
                        isNullable: false,
                        comment: "Код мови, напр. 'en', 'uk'",
                    },
                    {
                        name: "field",
                        type: "varchar",
                        isNullable: false,
                        comment: "Назва поля перекладу, напр. 'name', 'description'",
                    },
                    {
                        name: "value",
                        type: "text",
                        isNullable: false,
                        comment: "Текст перекладу",
                    },
                ],
                indices: [
                    {
                        name: "IDX_employment_translation_unique",
                        columnNames: ["employment_type_id", "language_code", "field"],
                        isUnique: true,
                    },
                ],
                comment: "Переклади типів зайнятості",
            }),
            true
        );

        // FK з каскадним видаленням і оновленням
        await queryRunner.createForeignKey(
            "employment_types_translations",
            new TableForeignKey({
                columnNames: ["employment_type_id"],
                referencedTableName: "employment_types",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Спочатку видаляємо FK, щоб уникнути помилок
        const table = await queryRunner.getTable("employment_types_translations");
        if (table) {
            const foreignKey = table.foreignKeys.find(fk => fk.columnNames.includes("employment_type_id"));
            if (foreignKey) {
                await queryRunner.dropForeignKey("employment_types_translations", foreignKey);
            }
        }

        await queryRunner.dropTable("employment_types_translations");
        await queryRunner.dropTable("employment_types");
    }
}
