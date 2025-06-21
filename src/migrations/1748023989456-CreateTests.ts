import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateTests1748023989456 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // === Tests ===
        await queryRunner.createTable(
            new Table({
                name: "tests",
                columns: [
                    { name: "id", type: "uuid", isPrimary: true, default: "uuid_generate_v4()" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "updated_at", type: "timestamp", default: "now()", onUpdate: "now()" },
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: "test_translations",
                columns: [
                    { name: "id", type: "serial", isPrimary: true },
                    { name: "test_id", type: "uuid" },
                    { name: "language_code", type: "varchar", length: "5" },
                    { name: "title", type: "varchar", length: "255" },
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
                    { name: "id", type: "uuid", isPrimary: true, default: "uuid_generate_v4()" },
                    { name: "test_id", type: "uuid" },
                    { name: "order", type: "int" },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "updated_at", type: "timestamp", default: "now()", onUpdate: "now()" },
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
                    { name: "id", type: "serial", isPrimary: true },
                    { name: "question_id", type: "uuid" },
                    { name: "language_code", type: "varchar", length: "5" },
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

        // === Answer Options ===
        await queryRunner.createTable(
            new Table({
                name: "test_answer_options",
                columns: [
                    { name: "id", type: "uuid", isPrimary: true, default: "uuid_generate_v4()" },
                    { name: "question_id", type: "uuid" },
                    { name: "value", type: "varchar", length: "255" },
                    { name: "order", type: "int" },
                    { name: "is_correct", type: "boolean", default: false },
                    { name: "created_at", type: "timestamp", default: "now()" },
                    { name: "updated_at", type: "timestamp", default: "now()", onUpdate: "now()" },
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
                    { name: "id", type: "serial", isPrimary: true },
                    { name: "answer_option_id", type: "uuid" },
                    { name: "language_code", type: "varchar", length: "5" },
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
