import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUsersEnvironmentTypes1747942550774 implements MigrationInterface {

    private readonly tableName = "users_environment_types";
    private readonly fkUser = "FK_users_environment_types_user";
    private readonly fkEnvironment = "FK_users_environment_types_environment";

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: this.tableName,
            columns: [
                {
                    name: "user_id",
                    type: "integer",
                    isPrimary: true,
                },
                {
                    name: "environment_type_id",
                    type: "integer",
                    isPrimary: true,
                },
                {
                    name: "created_at",
                    type: "timestamptz",
                    default: "CURRENT_TIMESTAMP",
                },
                {
                    name: "updated_at",
                    type: "timestamptz",
                    default: "CURRENT_TIMESTAMP",
                    onUpdate: "CURRENT_TIMESTAMP",
                },
            ],
        }));

        await queryRunner.createForeignKey(this.tableName, new TableForeignKey({
            name: this.fkUser,
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
        }));

        await queryRunner.createForeignKey(this.tableName, new TableForeignKey({
            name: this.fkEnvironment,
            columnNames: ["environment_type_id"],
            referencedTableName: "environment_types",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(this.tableName, this.fkUser);
        await queryRunner.dropForeignKey(this.tableName, this.fkEnvironment);
        await queryRunner.dropTable(this.tableName);
    }
}
