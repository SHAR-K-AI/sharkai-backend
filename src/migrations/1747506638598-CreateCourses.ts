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
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "url",
                        type: "varchar",
                    },
                    {
                        name: "duration_hours",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "provider",
                        type: "varchar",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
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
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "course_id",
                        type: "int",
                    },
                    {
                        name: "language_code",
                        type: "varchar",
                        length: "5",
                    },
                    {
                        name: "field",
                        type: "varchar",
                    },
                    {
                        name: "value",
                        type: "text",
                    },
                ],
            }),
            true
        );

        // Зовнішній ключ для courses_translations
        await queryRunner.createForeignKey(
            "courses_translations",
            new TableForeignKey({
                columnNames: ["course_id"],
                referencedTableName: "courses",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("courses_translations");
        await queryRunner.dropTable("courses");
    }
}
