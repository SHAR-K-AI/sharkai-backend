import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateProfessionCategories1747495847295 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Створення таблиці категорій професій
        await queryRunner.createTable(
            new Table({
                name: "profession_categories",
                columns: [
                    {
                        name: "id",
                        type: "serial",       // автоінкремент (PostgreSQL)
                        isPrimary: true,
                    },
                    {
                        name: "level",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "code",
                        type: "varchar",
                        isUnique: true,
                        isNullable: false,
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
                        // оновлення updated_at потрібно робити через тригер або в коді
                    },
                ],
            }),
            true
        );

        // Створення таблиці перекладів категорій професій
        await queryRunner.createTable(
            new Table({
                name: "profession_categories_translations",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "category_id",
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
                        comment: "Назва поля, яке перекладається (наприклад, title, description)",
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
                        name: "uq_profession_category_translation_unique",
                        columnNames: ["category_id", "language_code", "field"],
                    },
                ],
            }),
            true
        );

        // Додавання зовнішнього ключа з каскадним видаленням
        await queryRunner.createForeignKey(
            "profession_categories_translations",
            new TableForeignKey({
                columnNames: ["category_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "profession_categories",
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Спершу видаляємо FK, щоб уникнути помилок при видаленні таблиці
        const table = await queryRunner.getTable("profession_categories_translations");
        if (table) {
            const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("category_id") !== -1);
            if (foreignKey) {
                await queryRunner.dropForeignKey("profession_categories_translations", foreignKey);
            }
        }
        await queryRunner.dropTable("profession_categories_translations");
        await queryRunner.dropTable("profession_categories");
    }
}
