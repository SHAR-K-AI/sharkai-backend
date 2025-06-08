import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserTestPassages1749318474888 implements MigrationInterface {
    private readonly tableName = "user_test_passages";

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
                        name: "test_id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "passed_at",
                        type: "timestamptz",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "score",
                        type: "double precision",
                        isNullable: true,
                    },
                ],
            })
        );

        await queryRunner.createForeignKeys(this.tableName, [
            new TableForeignKey({
                name: "FK_UserTestPassages_User",
                columnNames: ["user_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            }),
            new TableForeignKey({
                name: "FK_UserTestPassages_Test",
                columnNames: ["test_id"],
                referencedTableName: "tests",
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
