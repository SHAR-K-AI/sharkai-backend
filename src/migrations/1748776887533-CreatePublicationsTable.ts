import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
    TableUnique,
} from "typeorm";

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
                        length: "255",
                        isUnique: true,
                    },
                    {
                        name: "profession_code",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "published_at",
                        type: "timestamptz",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamptz",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamptz",
                        default: "now()",
                        onUpdate: "now()",
                    },
                ],
            })
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
                        length: "100",
                    },
                    {
                        name: "value",
                        type: "text",
                    },
                ],
            })
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

        await queryRunner.createUniqueConstraint(
            "publications_translations",
            new TableUnique({
                name: "UQ_publication_language_field",
                columnNames: ["publication_id", "language_code", "field"],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const translationsTable = await queryRunner.getTable("publications_translations");
        if (translationsTable) {
            const uniqueConstraint = translationsTable.uniques.find(
                (uq) => uq.name === "UQ_publication_language_field"
            );
            if (uniqueConstraint) {
                await queryRunner.dropUniqueConstraint("publications_translations", uniqueConstraint);
            }

            for (const fk of translationsTable.foreignKeys) {
                await queryRunner.dropForeignKey("publications_translations", fk);
            }
        }

        const publicationsTable = await queryRunner.getTable("publications");
        if (publicationsTable) {
            for (const fk of publicationsTable.foreignKeys) {
                await queryRunner.dropForeignKey("publications", fk);
            }
        }

        await queryRunner.dropTable("publications_translations");
        await queryRunner.dropTable("publications");
    }
}
