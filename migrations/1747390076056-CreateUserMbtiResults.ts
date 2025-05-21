import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUserMbtiResults1747390076056 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'user_mbti_results',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'user_id',
                    type: 'int',
                },
                {
                    name: 'test_id',
                    type: 'char',
                    length: '36',
                },
                {
                    name: 'result_type',
                    type: 'varchar', // Наприклад: "INTJ", "ESFP" тощо
                },
                {
                    name: 'answers',
                    type: 'json',
                    isNullable: true, // якщо хочеш дозволити зберігати без відповідей
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }));

        await queryRunner.createForeignKeys('user_mbti_results', [
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
            }),
            new TableForeignKey({
                columnNames: ['test_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'mbti_tests',
                onDelete: 'CASCADE',
            }),
        ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_mbti_results');
    }
}
