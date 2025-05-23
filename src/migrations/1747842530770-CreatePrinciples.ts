import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreatePrinciples1747842530770 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Основна таблиця принципів (цінностей)
        await queryRunner.createTable(
            new Table({
                name: "principles",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "category",
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

        // Таблиця перекладів принципів
        await queryRunner.createTable(
            new Table({
                name: "principles_translations",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "principle_id",
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
            "principles_translations",
            new TableForeignKey({
                name: "FK_principles_translations_principle_id",
                columnNames: ["principle_id"],
                referencedTableName: "principles",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("principles_translations");
        await queryRunner.dropTable("principles");
    }

}
