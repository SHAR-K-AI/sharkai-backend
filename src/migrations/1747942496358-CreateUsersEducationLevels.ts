import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsersEducationLevels1747942496358 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users_education_levels",
            columns: [
                { name: "user_id", type: "int", isPrimary: true },
                { name: "education_level_id", type: "int", isPrimary: true },
                { name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP" }
            ]
        }));

        await queryRunner.createForeignKey("users_education_levels", new TableForeignKey({
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("users_education_levels", new TableForeignKey({
            columnNames: ["education_level_id"],
            referencedTableName: "education_levels",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_education_levels");
    }

}
