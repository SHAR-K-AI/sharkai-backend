import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserMbtiResults1747390076056 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Створюємо таблицю user_mbti_results
        await queryRunner.createTable(new Table({
            name: 'user_mbti_results',
            columns: [
                {
                    name: 'id',
                    type: 'serial',       // автоінкрементний первинний ключ (PostgreSQL)
                    isPrimary: true,
                },
                {
                    name: 'user_id',
                    type: 'int',
                    isNullable: false,    // краще явно вказати NOT NULL, якщо дані обов’язкові
                },
                {
                    name: 'test_id',
                    type: 'uuid',
                    isNullable: false,    // посилання на тест також обов’язкове
                },
                {
                    name: 'result',
                    type: 'jsonb',        // jsonb краще для пошуку та ефективності в PostgreSQL
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamptz',
                    default: 'now()',
                    isNullable: false,
                },
            ],
        }), true); // 'true' для створення таблиці тільки якщо її немає

        // Створюємо зовнішні ключі
        await queryRunner.createForeignKeys('user_mbti_results', [
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',  // видаляти результати при видаленні користувача
                onUpdate: 'CASCADE',  // підтримувати цілісність при оновленні id користувача
            }),
            new TableForeignKey({
                columnNames: ['test_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'mbti_tests',
                onDelete: 'CASCADE',  // видаляти результати при видаленні тесту
                onUpdate: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Спершу видаляємо зовнішні ключі, щоб уникнути помилок
        const table = await queryRunner.getTable('user_mbti_results');
        if (table) {
            const foreignKeys = table.foreignKeys.filter(fk =>
                ['user_id', 'test_id'].includes(fk.columnNames[0])
            );
            await queryRunner.dropForeignKeys('user_mbti_results', foreignKeys);
        }
        // Потім видаляємо таблицю
        await queryRunner.dropTable('user_mbti_results');
    }
}
