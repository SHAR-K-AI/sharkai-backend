import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUsersSkills1747507549607 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users_skills",
                columns: [
                    { name: "user_id", type: "integer", isPrimary: true },
                    { name: "skill_id", type: "integer", isPrimary: true },
                    {
                        name: "level",
                        type: "integer",
                        isNullable: true,
                        comment: "Рівень володіння навичкою (може бути від 1 до 10, або інша шкала)"
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
                    { columnNames: ["skill_id"] },
                ],
                comment: "користувачів з навичками та їх рівнями",
            }),
            true
        );

        // FK для user_id
        await queryRunner.createForeignKey(
            "users_skills",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        // FK для skill_id
        await queryRunner.createForeignKey(
            "users_skills",
            new TableForeignKey({
                columnNames: ["skill_id"],
                referencedTableName: "skills",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        // Триггер або триггерна функція для оновлення updated_at можна додати пізніше в окремій міграції
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("users_skills");
        if (table) {
            for (const fk of table.foreignKeys) {
                await queryRunner.dropForeignKey("users_skills", fk);
            }
        }
        await queryRunner.dropTable("users_skills");
    }
}
