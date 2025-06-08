import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateWorkEnvironmentTypes1747842566540 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Основна таблиця типів робочого середовища
        await queryRunner.createTable(
            new Table({
                name: "environment_types",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "category",
                        type: "varchar",
                        isNullable: true,
                        comment: "Категорія типу середовища (опційно)",
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
                comment: "Типи робочого середовища"
            }),
            true
        );

        // Таблиця перекладів типів середовища
        await queryRunner.createTable(
            new Table({
                name: "environment_types_translations",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "environment_id",
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
                        name: "IDX_environment_translation_unique",
                        columnNames: ["environment_id", "language_code", "field"],
                        isUnique: true,
                    }
                ],
                comment: "Переклади типів робочого середовища"
            }),
            true
        );

        // Зовнішній ключ із каскадним видаленням і оновленням
        await queryRunner.createForeignKey(
            "environment_types_translations",
            new TableForeignKey({
                columnNames: ["environment_id"],
                referencedTableName: "environment_types",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Видаляємо FK перед таблицею перекладів
        const table = await queryRunner.getTable("environment_types_translations");
        if (table) {
            const foreignKey = table.foreignKeys.find(fk => fk.columnNames.includes("environment_id"));
            if (foreignKey) {
                await queryRunner.dropForeignKey("environment_types_translations", foreignKey);
            }
        }

        await queryRunner.dropTable("environment_types_translations");
        await queryRunner.dropTable("environment_types");
    }
}
