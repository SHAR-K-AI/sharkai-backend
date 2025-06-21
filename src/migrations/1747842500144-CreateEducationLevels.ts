import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateEducationLevels1747842500144 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Таблиця рівнів освіти
        await queryRunner.createTable(
            new Table({
                name: "education_levels",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
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
                comment: "Таблиця рівнів освіти"
            }),
            true
        );

        // Таблиця перекладів для рівнів освіти
        await queryRunner.createTable(
            new Table({
                name: "education_levels_translations",
                columns: [
                    {
                        name: "id",
                        type: "serial",
                        isPrimary: true,
                    },
                    {
                        name: "education_level_id",
                        type: "integer",
                        isNullable: false,
                    },
                    {
                        name: "language_code",
                        type: "varchar",
                        length: "5",
                        isNullable: false,
                        comment: "Код мови, напр. 'en', 'uk'"
                    },
                    {
                        name: "field",
                        type: "varchar",
                        isNullable: false,
                        comment: "Назва поля перекладу, напр. 'name', 'description'"
                    },
                    {
                        name: "value",
                        type: "text",
                        isNullable: false,
                        comment: "Значення перекладу"
                    },
                ],
                indices: [
                    {
                        columnNames: ["education_level_id", "language_code", "field"],
                        isUnique: true,
                        name: "IDX_education_level_translation_unique"
                    }
                ],
                comment: "Переклади для рівнів освіти"
            }),
            true
        );

        // Зовнішній ключ на education_levels
        await queryRunner.createForeignKey(
            "education_levels_translations",
            new TableForeignKey({
                columnNames: ["education_level_id"],
                referencedTableName: "education_levels",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Спершу вилучаємо FK
        const table = await queryRunner.getTable("education_levels_translations");
        if (table) {
            const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("education_level_id") !== -1);
            if (foreignKey) {
                await queryRunner.dropForeignKey("education_levels_translations", foreignKey);
            }
        }

        await queryRunner.dropTable("education_levels_translations");
        await queryRunner.dropTable("education_levels");
    }

}
