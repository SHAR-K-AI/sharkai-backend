import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateProfessionRelations1747506708492 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // profession_skills
        await queryRunner.createTable(
            new Table({
                name: "profession_skills",
                columns: [
                    { name: "profession_id", type: "int", isPrimary: true },
                    { name: "skill_id", type: "int", isPrimary: true },
                ],
            }),
            true
        );

        await queryRunner.createForeignKey(
            "profession_skills",
            new TableForeignKey({
                columnNames: ["profession_id"],
                referencedTableName: "professions",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );

        await queryRunner.createForeignKey(
            "profession_skills",
            new TableForeignKey({
                columnNames: ["skill_id"],
                referencedTableName: "skills",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );

        // profession_courses
        await queryRunner.createTable(
            new Table({
                name: "profession_courses",
                columns: [
                    { name: "profession_id", type: "int", isPrimary: true },
                    { name: "course_id", type: "int", isPrimary: true },
                ],
            }),
            true
        );

        await queryRunner.createForeignKey(
            "profession_courses",
            new TableForeignKey({
                columnNames: ["profession_id"],
                referencedTableName: "professions",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );

        await queryRunner.createForeignKey(
            "profession_courses",
            new TableForeignKey({
                columnNames: ["course_id"],
                referencedTableName: "courses",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("profession_courses");
        await queryRunner.dropTable("profession_skills");
    }

}
