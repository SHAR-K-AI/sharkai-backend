import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateLearningPath1748023989566 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "achievements",
                columns: [
                    { name: "id", type: "varchar", length: "36", isPrimary: true },
                    { name: "title", type: "varchar", isNullable: false },
                    { name: "description", type: "text", isNullable: true },
                    { name: "icon", type: "varchar", isNullable: true },
                    { name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP" },
                    { name: "updated_at", type: "timestamp", default: "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" },
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: "learning_paths",
                columns: [
                    { name: "id", type: "varchar", length: "36", isPrimary: true },
                    { name: "user_id", type: "int", isNullable: false },
                    { name: "title", type: "varchar", isNullable: false },
                    { name: "description", type: "text", isNullable: true },
                    { name: "start_date", type: "date", isNullable: false },
                    { name: "end_date", type: "date", isNullable: false },
                    { name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP" },
                    { name: "updated_at", type: "timestamp", default: "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" },
                ],
            })
        );

        await queryRunner.createForeignKey(
            "learning_paths",
            new TableForeignKey({
                columnNames: ["user_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "users",
                onDelete: "CASCADE",
            })
        );

        await queryRunner.createTable(
            new Table({
                name: "learning_path_days",
                columns: [
                    { name: "id", type: "varchar", length: "36", isPrimary: true },
                    { name: "learning_path_id", type: "varchar", length: "36", isNullable: false },
                    { name: "day_number", type: "int", isNullable: false },
                    { name: "date", type: "date", isNullable: false },
                    { name: "task_type", type: "varchar", isNullable: false },
                    { name: "test_id", type: "varchar", length: "36", isNullable: true },
                    { name: "achievement_id", type: "varchar", length: "36", isNullable: true },
                    { name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP" },
                    { name: "updated_at", type: "timestamp", default: "CURRENT_TIMESTAMP", onUpdate: "CURRENT_TIMESTAMP" },
                ],
            })
        );

        await queryRunner.createForeignKeys("learning_path_days", [
            new TableForeignKey({
                columnNames: ["learning_path_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "learning_paths",
                onDelete: "CASCADE",
            }),
            new TableForeignKey({
                columnNames: ["achievement_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "achievements",
                onDelete: "SET NULL",
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const tables = ["learning_path_days", "learning_paths", "achievements"];

        for (const tableName of tables) {
            const table = await queryRunner.getTable(tableName);
            if (table) {
                for (const fk of table.foreignKeys) {
                    await queryRunner.dropForeignKey(tableName, fk);
                }
            }
        }

        await queryRunner.dropTable("learning_path_days");
        await queryRunner.dropTable("learning_paths");
        await queryRunner.dropTable("achievements");
    }

}
