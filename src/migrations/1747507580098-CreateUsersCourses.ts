import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsersCourses1747507580098 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users_courses",
            columns: [
                { name: "user_id", type: "int", isPrimary: true },
                { name: "course_id", type: "int", isPrimary: true },
                { name: "status", type: "varchar", length: "20", default: "'planned'" }, // planned | started | completed
                { name: "progress", type: "int", default: 0 },
                { name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP" }
            ]
        }));

        await queryRunner.createForeignKey("users_courses", new TableForeignKey({
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("users_courses", new TableForeignKey({
            columnNames: ["course_id"],
            referencedTableName: "courses",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users_courses");
    }

}
