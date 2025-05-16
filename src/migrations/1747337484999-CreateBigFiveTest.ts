import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateBigFiveTest1747337484999 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "big_five_tests",
                columns: [
                    {
                        name: "id",
                        type: "char",
                        length: "36",
                        isPrimary: true,
                    },
                    {
                        name: "title",
                        type: "varchar",
                        length: "255",
                        isNullable: false,
                    },
                    {
                        name: "description",
                        type: "text",
                        isNullable: true,
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                    },
                ],
            }),
            true
        );

        await queryRunner.createTable(
            new Table({
                name: "big_five_questions",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "text",
                        type: "text",
                        isNullable: false,
                    },
                    {
                        name: "factor",
                        type: "varchar",
                        length: "2",
                        isNullable: false,
                    },
                    {
                        name: "test_id",
                        type: "char",
                        length: "36",
                        isNullable: false,
                    },
                ],
                foreignKeys: [
                    new TableForeignKey({
                        columnNames: ["test_id"],
                        referencedTableName: "big_five_tests",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE",
                    }),
                ],
            }),
            true
        );

        await queryRunner.query(
            "ALTER TABLE `big_five_questions` ADD CONSTRAINT `factor_check` CHECK (`factor` IN ('O','C','E','A','N'))"
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            "ALTER TABLE `big_five_questions` DROP CHECK `factor_check`"
        );
        await queryRunner.dropTable("big_five_questions", true);
        await queryRunner.dropTable("big_five_tests", true);
    }
}
