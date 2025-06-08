import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUsersEducationLevels1747942496358 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Створення таблиці зв’язку користувачів і рівнів освіти (many-to-many)
        await queryRunner.createTable(
            new Table({
                name: "users_education_levels",
                columns: [
                    {
                        name: "user_id",
                        type: "integer",
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: "education_level_id",
                        type: "integer",
                        isPrimary: true,
                        isNullable: false,
                    },
                    {
                        name: "created_at",
                        type: "timestamptz",
                        isNullable: false,
                        default: "now()",
                        comment: "Дата додавання запису",
                    },
                ],
                comment: "користувачів з рівнями освіти",
            }),
            true
        );

        // Додавання FK на користувачів
        await queryRunner.createForeignKey(
            "users_education_levels",
            new TableForeignKey({
                name: "FK_users_education_levels_user",
                columnNames: ["user_id"],
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        // Додавання FK на рівні освіти
        await queryRunner.createForeignKey(
            "users_education_levels",
            new TableForeignKey({
                name: "FK_users_education_levels_education_level",
                columnNames: ["education_level_id"],
                referencedTableName: "education_levels",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Спочатку видаляємо FK, щоб уникнути помилок
        const table = await queryRunner.getTable("users_education_levels");
        if (table) {
            const foreignKeyUser = table.foreignKeys.find(fk => fk.name === "FK_users_education_levels_user");
            if (foreignKeyUser) {
                await queryRunner.dropForeignKey("users_education_levels", foreignKeyUser);
            }
            const foreignKeyEducation = table.foreignKeys.find(fk => fk.name === "FK_users_education_levels_education_level");
            if (foreignKeyEducation) {
                await queryRunner.dropForeignKey("users_education_levels", foreignKeyEducation);
            }
        }

        await queryRunner.dropTable("users_education_levels");
    }
}
