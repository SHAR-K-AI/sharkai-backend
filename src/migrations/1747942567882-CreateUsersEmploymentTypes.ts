import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsersEmploymentTypes1747942567882 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users_employment_types",
            columns: [
                {name: "user_id", type: "int", isPrimary: true},
                {name: "employment_type_id", type: "int", isPrimary: true},
                {name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP"}
            ]
        }));

        await queryRunner.createForeignKey("users_employment_types", new TableForeignKey({
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("users_employment_types", new TableForeignKey({
            columnNames: ["employment_type_id"],
            referencedTableName: "employment_types",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_employment_types");
    }

}
