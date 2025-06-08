import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUsersPrinciples1747942528776 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users_principles",
                columns: [
                    {
                        name: "user_id",
                        type: "integer",
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: "principle_id",
                        type: "integer",
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamptz",
                        default: "now()",
                        isNullable: false,
                    },
                ],
                comment: "Мапа   між користувачами та їхніми принципами",
            }),
            true
        );

        await queryRunner.createForeignKey(
            "users_principles",
            new TableForeignKey({
                name: "FK_users_principles_user",
                columnNames: ["user_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        await queryRunner.createForeignKey(
            "users_principles",
            new TableForeignKey({
                name: "FK_users_principles_principle",
                columnNames: ["principle_id"],
                referencedTableName: "principles",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("users_principles");
        if (table) {
            const userFK = table.foreignKeys.find(fk => fk.name === "FK_users_principles_user");
            if (userFK) {
                await queryRunner.dropForeignKey("users_principles", userFK);
            }

            const principleFK = table.foreignKeys.find(fk => fk.name === "FK_users_principles_principle");
            if (principleFK) {
                await queryRunner.dropForeignKey("users_principles", principleFK);
            }
        }

        await queryRunner.dropTable("users_principles");
    }
}
