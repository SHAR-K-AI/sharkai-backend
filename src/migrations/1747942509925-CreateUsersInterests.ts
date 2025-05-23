import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsersInterests1747942509925 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users_interests",
            columns: [
                { name: "user_id", type: "int", isPrimary: true },
                { name: "interest_id", type: "int", isPrimary: true },
                { name: "level", type: "int", isNullable: true },
                { name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP" }
            ]
        }));

        await queryRunner.createForeignKey("users_interests", new TableForeignKey({
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("users_interests", new TableForeignKey({
            columnNames: ["interest_id"],
            referencedTableName: "interests",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_interests");
    }

}
