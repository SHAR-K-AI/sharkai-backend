import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreatePrinciples1747842530770 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Основна таблиця принципів (цінностей)
        await queryRunner.createTable(
            new Table({
                name: "principles",
                columns: [
                    {
                        name: "id",
                        type: "serial",  // автоінкрементний integer
                        isPrimary: true,
                    },
                    {
                        name: "category",
                        type: "varchar",
                        isNullable: true,
                        comment: "Категорія принципу (опційно)"
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
                comment: "Таблиця з принципами (цінностями)"
            }),
            true
        );

        // Таблиця перекладів принципів
        await queryRunner.createTable(
            new Table({
                name: "principles_translations",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "principle_id",
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
                        comment: "Текст перекладу"
                    },
                ],
                indices: [
                    {
                        name: "IDX_principles_translation_unique",
                        columnNames: ["principle_id", "language_code", "field"],
                        isUnique: true,
                    }
                ],
                comment: "Переклади для принципів"
            }),
            true
        );

        // Зовнішній ключ із каскадним видаленням і оновленням
        await queryRunner.createForeignKey(
            "principles_translations",
            new TableForeignKey({
                columnNames: ["principle_id"],
                referencedTableName: "principles",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Спочатку видаляємо FK, щоб уникнути помилок
        const table = await queryRunner.getTable("principles_translations");
        if (table) {
            const foreignKey = table.foreignKeys.find(fk => fk.columnNames.includes("principle_id"));
            if (foreignKey) {
                await queryRunner.dropForeignKey("principles_translations", foreignKey);
            }
        }

        await queryRunner.dropTable("principles_translations");
        await queryRunner.dropTable("principles");
    }
}
