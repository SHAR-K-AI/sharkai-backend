import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreatePublicationsTable1748776887533 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "publications",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "slug",
                        type: "varchar",
                        isUnique: true,
                    },
                    {
                        name: "profession_code",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "published_at",
                        type: "timestamp",
                        isNullable: true,
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

        await queryRunner.createForeignKey(
            "publications",
            new TableForeignKey({
                columnNames: ["profession_code"],
                referencedColumnNames: ["code"],
                referencedTableName: "profession_categories",
                onDelete: "SET NULL",
                onUpdate: "CASCADE",
            })
        );

        await queryRunner.createTable(
            new Table({
                name: "publications_translations",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "publication_id",
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
            "publications_translations",
            new TableForeignKey({
                columnNames: ["publication_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "publications",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("publications_translations");
        await queryRunner.dropTable("publications");
    }

}
