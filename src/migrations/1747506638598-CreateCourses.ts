import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCourses1747506638598 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Таблиця курсів
        await queryRunner.createTable(
            new Table({
                name: "courses",
                columns: [
                    {
                        name: "id",
                        type: "serial",  // автоінкремент PostgreSQL
                        isPrimary: true,
                    },
                    {
                        name: "url",
                        type: "varchar",
                        length: "2048", // обмеження для url
                        isNullable: false,
                        comment: "Посилання на курс",
                    },
                    {
                        name: "duration_hours",
                        type: "int",
                        isNullable: true,
                        comment: "Тривалість курсу у годинах (опціонально)",
                    },
                    {
                        name: "provider",
                        type: "varchar",
                        length: "255",
                        isNullable: true,
                        comment: "Назва провайдера курсу (опціонально)",
                    },
                    {
                        name: "created_at",
                        type: "timestamptz",
                        default: "now()",
                        isNullable: false,
                    },
                    {
                        name: "updated_at",
                        type: "timestamptz",
                        default: "now()",
                        isNullable: false,
                    },
                ],
            }),
            true
        );

        // Таблиця перекладів курсів
        await queryRunner.createTable(
            new Table({
                name: "courses_translations",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "course_id",
                        type: "int",
                        isNullable: false,
                    },
                    {
                        name: "language_code",
                        type: "varchar",
                        length: "5",
                        isNullable: false,
                    },
                    {
                        name: "field",
                        type: "varchar",
                        length: "100",
                        isNullable: false,
                        comment: "Поле, яке перекладається (наприклад, title, description)",
                    },
                    {
                        name: "value",
                        type: "text",
                        isNullable: false,
                        comment: "Перекладене значення",
                    },
                ],
                uniques: [
                    {
                        name: "uq_course_translation_unique",
                        columnNames: ["course_id", "language_code", "field"],
                    },
                ],
            }),
            true
        );

        // FK для перекладів курсів
        await queryRunner.createForeignKey(
            "courses_translations",
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
        // Спершу FK знімаємо безпечно
        const translationTable = await queryRunner.getTable("courses_translations");
        if (translationTable) {
            const fk = translationTable.foreignKeys.find(fk => fk.columnNames.indexOf("course_id") !== -1);
            if (fk) {
                await queryRunner.dropForeignKey("courses_translations", fk);
            }
        }

        await queryRunner.dropTable("courses_translations");
        await queryRunner.dropTable("courses");
    }
}
