import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateProfessionCategories1747495847295 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "profession_categories",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "level",
                        type: "int",
                    },
                    {
                        name: "code",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true
        );

        await queryRunner.createTable(
            new Table({
                name: "profession_categories_translations",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "category_id",
                        type: "int",
                    },
                    {
                        name: "language_code",
                        type: "varchar",
                        length: "5",
                    },
                    {
                        name: "field",
                        type: "varchar",
                    },
                    {
                        name: "value",
                        type: "text",
                    },
                ],
            }),
            true
        );

        await queryRunner.createForeignKey(
            "profession_categories_translations",
            new TableForeignKey({
                columnNames: ["category_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "profession_categories",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("profession_categories_translations");
        await queryRunner.dropTable("profession_categories");
    }

}
