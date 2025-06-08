import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateProfessionRelations1747506708492 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Таблиця   професій і скілів (many-to-many)
        await queryRunner.createTable(
            new Table({
                name: "profession_skills",
                columns: [
                    { name: "profession_id", type: "integer", isPrimary: true },
                    { name: "skill_id", type: "integer", isPrimary: true },
                ],
                indices: [
                    { columnNames: ["profession_id"] },
                    { columnNames: ["skill_id"] },
                ],
                comment: "між професіями та скілами",
            }),
            true
        );

        // FK для profession_skills
        await queryRunner.createForeignKey(
            "profession_skills",
            new TableForeignKey({
                columnNames: ["profession_id"],
                referencedTableName: "professions",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        await queryRunner.createForeignKey(
            "profession_skills",
            new TableForeignKey({
                columnNames: ["skill_id"],
                referencedTableName: "skills",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        // Таблиця зв’язку професій і курсів (many-to-many)
        await queryRunner.createTable(
            new Table({
                name: "profession_courses",
                columns: [
                    { name: "profession_id", type: "integer", isPrimary: true },
                    { name: "course_id", type: "integer", isPrimary: true },
                ],
                indices: [
                    { columnNames: ["profession_id"] },
                    { columnNames: ["course_id"] },
                ],
                comment: "між професіями та курсами",
            }),
            true
        );

        // FK для profession_courses
        await queryRunner.createForeignKey(
            "profession_courses",
            new TableForeignKey({
                columnNames: ["profession_id"],
                referencedTableName: "professions",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );

        await queryRunner.createForeignKey(
            "profession_courses",
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
        // Перед видаленням таблиць треба видалити FK
        const tables = ["profession_courses", "profession_skills"];

        for (const tableName of tables) {
            const table = await queryRunner.getTable(tableName);
            if (table) {
                for (const fk of table.foreignKeys) {
                    await queryRunner.dropForeignKey(tableName, fk);
                }
            }
            await queryRunner.dropTable(tableName);
        }
    }
}
