import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateLearningPath1748023989566 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // === Achievements ===
        await queryRunner.createTable(new Table({
            name: "achievements",
            columns: [
                { name: "id", type: "uuid", isPrimary: true, default: "gen_random_uuid()" },
                { name: "icon", type: "varchar", isNullable: true },
                { name: "created_at", type: "timestamptz", default: "now()" },
                {
                    name: "updated_at",
                    type: "timestamptz",
                    default: "now()",
                    onUpdate: "now()"
                },
            ]
        }));

        await queryRunner.createTable(new Table({
            name: "achievement_translations",
            columns: [
                { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                { name: "achievement_id", type: "uuid" },
                { name: "language", type: "varchar", length: "5" },
                { name: "title", type: "varchar" },
                { name: "description", type: "text", isNullable: true },
            ]
        }));

        await queryRunner.createForeignKey("achievement_translations", new TableForeignKey({
            name: "FK_achievement_translations_achievement_id",
            columnNames: ["achievement_id"],
            referencedTableName: "achievements",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
        }));

        // === Learning Paths ===
        await queryRunner.createTable(new Table({
            name: "learning_paths",
            columns: [
                { name: "id", type: "uuid", isPrimary: true, default: "gen_random_uuid()" },
                { name: "user_id", type: "int" },
                { name: "start_date", type: "date" },
                { name: "end_date", type: "date" },
                { name: "created_at", type: "timestamptz", default: "now()" },
                {
                    name: "updated_at",
                    type: "timestamptz",
                    default: "now()",
                    onUpdate: "now()"
                },
            ]
        }));

        await queryRunner.createForeignKey("learning_paths", new TableForeignKey({
            name: "FK_learning_paths_user_id",
            columnNames: ["user_id"],
            referencedTableName: "users",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
        }));

        await queryRunner.createTable(new Table({
            name: "learning_path_translations",
            columns: [
                { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                { name: "learning_path_id", type: "uuid" },
                { name: "language", type: "varchar", length: "5" },
                { name: "title", type: "varchar" },
                { name: "description", type: "text", isNullable: true },
            ]
        }));

        await queryRunner.createForeignKey("learning_path_translations", new TableForeignKey({
            name: "FK_learning_path_translations_learning_path_id",
            columnNames: ["learning_path_id"],
            referencedTableName: "learning_paths",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
        }));

        // === Learning Path Days ===
        await queryRunner.createTable(new Table({
            name: "learning_path_days",
            columns: [
                { name: "id", type: "uuid", isPrimary: true, default: "gen_random_uuid()" },
                { name: "learning_path_id", type: "uuid" },
                { name: "day_number", type: "int" },
                { name: "date", type: "date" },
                { name: "task_type", type: "varchar" },
                { name: "url", type: "varchar", isNullable: true },
                { name: "test_id", type: "uuid", isNullable: true },
                { name: "publication_id", type: "int", isNullable: true },
                { name: "achievement_id", type: "uuid", isNullable: true },
                { name: "created_at", type: "timestamptz", default: "now()" },
                {
                    name: "updated_at",
                    type: "timestamptz",
                    default: "now()",
                    onUpdate: "now()"
                },
            ]
        }));

        await queryRunner.createForeignKeys("learning_path_days", [
            new TableForeignKey({
                name: "FK_learning_path_days_learning_path_id",
                columnNames: ["learning_path_id"],
                referencedTableName: "learning_paths",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE",
            }),
            new TableForeignKey({
                name: "FK_learning_path_days_achievement_id",
                columnNames: ["achievement_id"],
                referencedTableName: "achievements",
                referencedColumnNames: ["id"],
                onDelete: "SET NULL",
            }),
            new TableForeignKey({
                name: "FK_learning_path_days_test_id",
                columnNames: ["test_id"],
                referencedTableName: "tests",
                referencedColumnNames: ["id"],
                onDelete: "SET NULL",
            }),
            new TableForeignKey({
                name: "FK_learning_path_days_publication_id",
                columnNames: ["publication_id"],
                referencedTableName: "publications",
                referencedColumnNames: ["id"],
                onDelete: "SET NULL",
            }),
        ]);

        await queryRunner.createTable(new Table({
            name: "learning_path_day_translations",
            columns: [
                { name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                { name: "learning_path_day_id", type: "uuid" },
                { name: "language", type: "varchar", length: "5" },
                { name: "title", type: "varchar" },
                { name: "description", type: "text", isNullable: true },
            ]
        }));

        await queryRunner.createForeignKey("learning_path_day_translations", new TableForeignKey({
            name: "FK_learning_path_day_translations_learning_path_day_id",
            columnNames: ["learning_path_day_id"],
            referencedTableName: "learning_path_days",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE",
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const tableNames = [
            "learning_path_day_translations",
            "learning_path_days",
            "learning_path_translations",
            "learning_paths",
            "achievement_translations",
            "achievements",
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
