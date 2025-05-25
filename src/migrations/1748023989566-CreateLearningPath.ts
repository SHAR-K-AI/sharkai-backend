import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateLearningPath1748023989566 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Achievements
        await queryRunner.createTable(
            new Table({
                name: "achievements",
                columns: [
                    {name: "id", type: "varchar", length: "36", isPrimary: true},
                    {name: "icon", type: "varchar", isNullable: true},
                    {name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP"},
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP"
                    },
                ],
            })
        );

        await queryRunner.createTable(
            new Table({
                name: "achievement_translations",
                columns: [
                    {name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment"},
                    {name: "achievement_id", type: "varchar", length: "36"},
                    {name: "language", type: "varchar", length: "5"},
                    {name: "title", type: "varchar", isNullable: false},
                    {name: "description", type: "text", isNullable: true},
                ],
            })
        );

        await queryRunner.createForeignKey(
            "achievement_translations",
            new TableForeignKey({
                columnNames: ["achievement_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "achievements",
                onDelete: "CASCADE",
            })
        );

        // Learning Paths
        await queryRunner.createTable(
            new Table({
                name: "learning_paths",
                columns: [
                    {name: "id", type: "varchar", length: "36", isPrimary: true},
                    {name: "user_id", type: "int", isNullable: false},
                    {name: "start_date", type: "date", isNullable: false},
                    {name: "end_date", type: "date", isNullable: false},
                    {name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP"},
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP"
                    },
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
                name: "learning_path_translations",
                columns: [
                    {name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment"},
                    {name: "learning_path_id", type: "varchar", length: "36"},
                    {name: "language", type: "varchar", length: "5"},
                    {name: "title", type: "varchar", isNullable: false},
                    {name: "description", type: "text", isNullable: true},
                ],
            })
        );

        await queryRunner.createForeignKey(
            "learning_path_translations",
            new TableForeignKey({
                columnNames: ["learning_path_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "learning_paths",
                onDelete: "CASCADE",
            })
        );

        // Learning Path Days
        await queryRunner.createTable(
            new Table({
                name: "learning_path_days",
                columns: [
                    {name: "id", type: "varchar", length: "36", isPrimary: true},
                    {name: "learning_path_id", type: "varchar", length: "36", isNullable: false},
                    {name: "day_number", type: "int", isNullable: false},
                    {name: "date", type: "date", isNullable: false},
                    {name: "task_type", type: "varchar", isNullable: false},
                    {name: "url", type: "varchar", isNullable: true},
                    {name: "test_id", type: "varchar", length: "36", isNullable: true},
                    {name: "achievement_id", type: "varchar", length: "36", isNullable: true},
                    {name: "created_at", type: "timestamp", default: "CURRENT_TIMESTAMP"},
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "CURRENT_TIMESTAMP",
                        onUpdate: "CURRENT_TIMESTAMP"
                    },
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

        await queryRunner.createTable(
            new Table({
                name: "learning_path_day_translations",
                columns: [
                    {name: "id", type: "int", isPrimary: true, isGenerated: true, generationStrategy: "increment"},
                    {name: "learning_path_day_id", type: "varchar", length: "36"},
                    {name: "language", type: "varchar", length: "5"},
                    {name: "title", type: "varchar", isNullable: false},
                    {name: "description", type: "text", isNullable: true},
                ],
            })
        );

        await queryRunner.createForeignKey(
            "learning_path_day_translations",
            new TableForeignKey({
                columnNames: ["learning_path_day_id"],
                referencedColumnNames: ["id"],
                referencedTableName: "learning_path_days",
                onDelete: "CASCADE",
            })
        );
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
