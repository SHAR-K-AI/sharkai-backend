import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsersEnvironmentTypes1747942550774 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users_environment_types",
            columns: [
                { name: "user_id", type: "int", isPrimary: true },
                { name: "environment_type_id", type: "int", isPrimary: true },
                { name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP" }
            ]
        }));

        await queryRunner.createForeignKey("users_environment_types", new TableForeignKey({
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("users_environment_types", new TableForeignKey({
            columnNames: ["environment_type_id"],
            referencedTableName: "environment_types",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_environment_types");
    }

}
