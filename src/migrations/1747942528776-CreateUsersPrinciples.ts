import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsersPrinciples1747942528776 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users_principles",
            columns: [
                { name: "user_id", type: "int", isPrimary: true },
                { name: "principle_id", type: "int", isPrimary: true },
                { name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP" }
            ]
        }));

        await queryRunner.createForeignKey("users_principles", new TableForeignKey({
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("users_principles", new TableForeignKey({
            columnNames: ["principle_id"],
            referencedTableName: "principles",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_principles");
    }

}
