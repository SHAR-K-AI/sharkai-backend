import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUsersProfessions1747507509155 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Створення таблиці   користувачів і професій
        await queryRunner.createTable(
            new Table({
                name: "users_professions",
                columns: [
                    { name: "user_id", type: "integer", isPrimary: true },
                    { name: "profession_id", type: "integer", isPrimary: true },
                    {
                        name: "created_at",
                        type: "timestamptz",
                        isNullable: false,
                        default: "now()",
                    },
                ],
                indices: [
                    { columnNames: ["user_id"] },
                    { columnNames: ["profession_id"] },
                ],
                comment: "користувачів із професіями",
            }),
            true
        );

        // FK для user_id
        await queryRunner.createForeignKey(
            "users_professions",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        // FK для profession_id
        await queryRunner.createForeignKey(
            "users_professions",
            new TableForeignKey({
                columnNames: ["profession_id"],
                referencedTableName: "professions",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Спершу видаляємо FK перед видаленням таблиці
        const table = await queryRunner.getTable("users_professions");
        if (table) {
            for (const fk of table.foreignKeys) {
                await queryRunner.dropForeignKey("users_professions", fk);
            }
        }
        await queryRunner.dropTable("users_professions");
    }
}
