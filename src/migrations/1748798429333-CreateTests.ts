import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateTests1748798429333 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // === Tests ===
        await queryRunner.createTable(
            new Table({
                name: "tests",
                columns: [
                    { name: "id", type: "varchar", length: "36", isPrimary: true },
                    { name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP" },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: "test_translations",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "test_id", type: "varchar", length: "36" },
                    { name: "language", type: "varchar", length: "5" },
                    { name: "title", type: "varchar" },
                    { name: "description", type: "text", isNullable: true },
                ],
            })
        );

        await queryRunner.createForeignKey(
            "test_translations",
            new TableForeignKey({
                columnNames: ["test_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "tests",
                onDelete: "CASCADE",
            })
        );

        // === Questions ===
        await queryRunner.createTable(
            new Table({
                name: "test_questions",
                columns: [
                    { name: "id", type: "varchar", length: "36", isPrimary: true },
                    { name: "test_id", type: "varchar", length: "36" },
                    { name: "order", type: "int" },
                    { name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP" },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ],
            })
        );

        await queryRunner.createForeignKey(
            "test_questions",
            new TableForeignKey({
                columnNames: ["test_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "tests",
                onDelete: "CASCADE",
            })
        );

        await queryRunner.createTable(
            new Table({
                name: "test_question_translations",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "question_id", type: "varchar", length: "36" },
                    { name: "language", type: "varchar", length: "5" },
                    { name: "text", type: "text" },
                ],
            })
        );

        await queryRunner.createForeignKey(
            "test_question_translations",
            new TableForeignKey({
                columnNames: ["question_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "test_questions",
                onDelete: "CASCADE",
            })
        );

        // === Answers ===
        await queryRunner.createTable(
            new Table({
                name: "test_answer_options",
                columns: [
                    { name: "id", type: "varchar", length: "36", isPrimary: true },
                    { name: "question_id", type: "varchar", length: "36" },
                    { name: "value", type: "varchar" }, // Наприклад: "A", "B", або бал "1", "2"
                    { name: "order", type: "int" },
                    { name: "is_correct", type: "boolean", default: false },  // <- додано
                    { name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP" },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP",
                    },
                ],
            })
        );

        await queryRunner.createForeignKey(
            "test_answer_options",
            new TableForeignKey({
                columnNames: ["question_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "test_questions",
                onDelete: "CASCADE",
            })
        );

        await queryRunner.createTable(
            new Table({
                name: "test_answer_option_translations",
                columns: [
                    { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "answer_option_id", type: "varchar", length: "36" },
                    { name: "language", type: "varchar", length: "5" },
                    { name: "text", type: "text" },
                ],
            })
        );

        await queryRunner.createForeignKey(
            "test_answer_option_translations",
            new TableForeignKey({
                columnNames: ["answer_option_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "test_answer_options",
                onDelete: "CASCADE",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const tableNames = [
            "test_answer_option_translations",
            "test_answer_options",
            "test_question_translations",
            "test_questions",
            "test_translations",
            "tests",
        ];

        for (const tableName of tableNames) {
            const table = await queryRunner.getTable(tableName);
            if (table) {
                for (const fk of table.foreignKeys) {
                    await queryRunner.dropForeignKey(tableName, fk);
                }
            }
        }

        for (const tableName of tableNames) {
            await queryRunner.dropTable(tableName);
        }
    }
}
