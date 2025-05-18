import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateProfessions1747495954719 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Таблиця професій
        await queryRunner.createTable(
            new Table({
                name: "professions",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "category_id",
                        type: "int",
                        isNullable: true,
                    },
                    {
                        name: "mbti",
                        type: "json",
                        isNullable: true,
                    },
                    {
                        name: "riasec",
                        type: "json",
                        isNullable: true,
                    },
                    {
                        name: "gallup",
                        type: "json",
                        isNullable: true,
                    },
                    {
                        name: "bigFiveIdeal",
                        type: "json",
                        isNullable: true,
                    },
                    {
                        name: "asvab",
                        type: "json",
                        isNullable: true,
                    },
                    {
                        name: "salary_range",
                        type: "json",
                        isNullable: true,
                    },
                    {
                        name: "demand",
                        type: "int",
                        default: 0,
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

        // Додаємо зовнішній ключ окремо
        await queryRunner.createForeignKey(
            "professions",
            new TableForeignKey({
                columnNames: ["category_id"],
                referencedTableName: "profession_categories",
                referencedColumnNames: ["id"],
                onDelete: "SET NULL",
            })
        );

        // Таблиця перекладів для професій
        await queryRunner.createTable(
            new Table({
                name: "professions_translations",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "profession_id",
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

        await queryRunner.createForeignKey(
            "professions_translations",
            new TableForeignKey({
                columnNames: ["profession_id"],
                referencedTableName: "professions",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("professions_translations");
        await queryRunner.dropTable("professions");
    }
}
