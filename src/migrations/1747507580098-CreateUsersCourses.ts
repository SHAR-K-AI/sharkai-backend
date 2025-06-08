import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUsersCourses1747507580098 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users_courses",
                columns: [
                    { name: "user_id", type: "integer", isPrimary: true },
                    { name: "course_id", type: "integer", isPrimary: true },
                    {
                        name: "status",
                        type: "varchar",
                        length: "20",
                        isNullable: false,
                        default: `'planned'`,
                        comment: "Статус курсу для користувача: planned | started | completed"
                    },
                    {
                        name: "progress",
                        type: "integer",
                        isNullable: false,
                        default: 0,
                        comment: "Прогрес проходження курсу у відсотках (0-100)"
                    },
                    {
                        name: "created_at",
                        type: "timestamptz",
                        isNullable: false,
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamptz",
                        isNullable: false,
                        default: "now()",
                    },
                ],
                indices: [
                    { columnNames: ["user_id"] },
                    { columnNames: ["course_id"] },
                ],
                comment: "користувачів з курсами, статус проходження і прогрес"
            }),
            true
        );

        // FK user_id → users.id
        await queryRunner.createForeignKey(
            "users_courses",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        // FK course_id → courses.id
        await queryRunner.createForeignKey(
            "users_courses",
            new TableForeignKey({
                columnNames: ["course_id"],
                referencedTableName: "courses",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("users_courses");
        if (table) {
            for (const fk of table.foreignKeys) {
                await queryRunner.dropForeignKey("users_courses", fk);
            }
        }
        await queryRunner.dropTable("users_courses");
    }
}
