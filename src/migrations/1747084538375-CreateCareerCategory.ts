import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCareerCategory1747084538375 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Створити таблицю categories
        await queryRunner.createTable(new Table({
            name: "categories",
            columns: [
                {
                    name: "id",
                    type: "char",
                    length: "36",
                    isPrimary: true,
                },
                {
                    name: "title",
                    type: "varchar",
                    length: "255",
                },
                {
                    name: "description",
                    type: "text",
                    isNullable: true,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "CURRENT_TIMESTAMP",
                },
            ],
        }));

        // Створити таблицю user_categories
        await queryRunner.createTable(new Table({
            name: "user_categories",
            columns: [
                { name: "user_id", type: "int", isPrimary: true },
                { name: "category_id", type: "char", length: "36", isPrimary: true },  // UUID
            ],
        }));

        await queryRunner.createForeignKey("user_categories", new TableForeignKey({
            columnNames: ["user_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "users",
            onDelete: "CASCADE",
        }));

        await queryRunner.createForeignKey("user_categories", new TableForeignKey({
            columnNames: ["category_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "categories",
            onDelete: "CASCADE",
        }));

        // Створити таблицю test_categories
        await queryRunner.createTable(new Table({
            name: "test_categories",
            columns: [
                { name: "test_id", type: "bigint", isPrimary: true },
                { name: "category_id", type: "char", length: "36", isPrimary: true },  // UUID
            ],
        }));

        await queryRunner.createForeignKey("test_categories", new TableForeignKey({
            columnNames: ["test_id"],
            referencedColumnNames: ["test_id"],
            referencedTableName: "tests",
            onDelete: "CASCADE",
        }));

        await queryRunner.createForeignKey("test_categories", new TableForeignKey({
            columnNames: ["category_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "categories",
            onDelete: "CASCADE",
        }));

        // Створити таблицю profession_categories
        await queryRunner.createTable(new Table({
            name: "profession_categories",
            columns: [
                { name: "profession_id", type: "char", length: "36", isPrimary: true },  // UUID
                { name: "category_id", type: "char", length: "36", isPrimary: true },  // UUID
            ],
        }));

        await queryRunner.createForeignKey("profession_categories", new TableForeignKey({
            columnNames: ["profession_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "professions",
            onDelete: "CASCADE",
        }));

        await queryRunner.createForeignKey("profession_categories", new TableForeignKey({
            columnNames: ["category_id"],
            referencedColumnNames: ["id"],
            referencedTableName: "categories",
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("profession_categories");
        await queryRunner.dropTable("test_categories");
        await queryRunner.dropTable("user_categories");
        await queryRunner.dropTable("categories");
    }
}
