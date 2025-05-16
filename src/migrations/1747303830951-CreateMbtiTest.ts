import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateMbtiTest1747303830951 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // mbti_tests
        await queryRunner.createTable(new Table({
            name: 'mbti_tests',
            columns: [
                {
                    name: 'id',
                    type: 'char',
                    length: '36',
                    isPrimary: true,
                    isGenerated: false,
                },
                { name: 'title', type: 'varchar' },
                { name: 'description', type: 'text', isNullable: true },
                { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
            ],
        }));

        // mbti_questions
        await queryRunner.createTable(new Table({
            name: 'mbti_questions',
            columns: [
                {
                    name: 'id',
                    type: 'char',
                    length: '36',
                    isPrimary: true,
                },
                {
                    name: 'test_id',
                    type: 'char',
                    length: '36',
                },
                {
                    name: 'text',
                    type: 'text',
                },
                {
                    name: 'dimension',
                    type: 'varchar',
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
            ],
        }));

        await queryRunner.createForeignKey('mbti_questions', new TableForeignKey({
            columnNames: ['test_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'mbti_tests',
            onDelete: 'CASCADE',
        }));

        // mbti_answers
        await queryRunner.createTable(new Table({
            name: 'mbti_answers',
            columns: [
                { name: 'id', type: 'char', length: '36', isPrimary: true },
                { name: 'question_id', type: 'char', length: '36' },
                { name: 'text', type: 'varchar' },
                { name: 'value', type: 'varchar' }, // Наприклад: "E" або "I"
            ],
        }));

        await queryRunner.createForeignKey('mbti_answers', new TableForeignKey({
            columnNames: ['question_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'mbti_questions',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user_mbti_results');
        await queryRunner.dropTable('mbti_results');
        await queryRunner.dropTable('mbti_answers');
        await queryRunner.dropTable('mbti_questions');
    }
}
