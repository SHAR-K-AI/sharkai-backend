import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUsersInterests1747942509925 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Створення таблиці   користувачів з інтересами
        await queryRunner.createTable(
            new Table({
                name: "users_interests",
                columns: [
                    {
                        name: "user_id",
                        type: "integer",
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: "interest_id",
                        type: "integer",
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: "level",
                        type: "integer",
                        isNullable: false,
                        default: 0,
                        comment: "Рівень зацікавленості (0-10, наприклад)",
                    },
                    {
                        name: "created_at",
                        type: "timestamptz",
                        isNullable: false,
                        default: "now()",
                    },
                ],
                comment: "між користувачами та їхніми інтересами",
            }),
            true
        );

        // FK до users
        await queryRunner.createForeignKey(
            "users_interests",
            new TableForeignKey({
                name: "FK_users_interests_user",
                columnNames: ["user_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        // FK до interests
        await queryRunner.createForeignKey(
            "users_interests",
            new TableForeignKey({
                name: "FK_users_interests_interest",
                columnNames: ["interest_id"],
                referencedTableName: "interests",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Безпечне видалення FK перед дропом таблиці
        const table = await queryRunner.getTable("users_interests");
        if (table) {
            const fkUser = table.foreignKeys.find(fk => fk.name === "FK_users_interests_user");
            if (fkUser) {
                await queryRunner.dropForeignKey("users_interests", fkUser);
            }

            const fkInterest = table.foreignKeys.find(fk => fk.name === "FK_users_interests_interest");
            if (fkInterest) {
                await queryRunner.dropForeignKey("users_interests", fkInterest);
            }
        }

        await queryRunner.dropTable("users_interests");
    }
}
