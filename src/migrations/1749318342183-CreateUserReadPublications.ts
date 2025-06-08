import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserReadPublications1749318342183 implements MigrationInterface {
    private readonly tableName = "user_read_publications";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: this.tableName,
                columns: [
                    {
                        name: "user_id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "publication_id",
                        type: "int",
                        isPrimary: true,
                    },
                    {
                        name: "read_at",
                        type: "timestamptz",
                        default: "CURRENT_TIMESTAMP",
                    },
                ],
            })
        );

        await queryRunner.createForeignKeys(this.tableName, [
            new TableForeignKey({
                name: "FK_UserReadPublications_User",
                columnNames: ["user_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            }),
            new TableForeignKey({
                name: "FK_UserReadPublications_Publication",
                columnNames: ["publication_id"],
                referencedTableName: "publications",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable(this.tableName);
        if (table) {
            for (const fk of table.foreignKeys) {
                await queryRunner.dropForeignKey(this.tableName, fk);
            }
        }
        await queryRunner.dropTable(this.tableName);
    }
}
