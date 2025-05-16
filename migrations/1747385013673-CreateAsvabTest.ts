import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateAsvabTest1747385013673 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // asvab_tests
        await queryRunner.createTable(new Table({
            name: 'asvab_tests',
            columns: [
                {
                    name: 'id',
                    type: 'char',
                    length: '36',
                    isPrimary: true,
                },
                { name: 'title', type: 'varchar' },
                { name: 'description', type: 'text', isNullable: true },
                { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
            ],
        }));

        // asvab_questions
        await queryRunner.createTable(new Table({
            name: 'asvab_questions',
            columns: [
                { name: 'id', type: 'char', length: '36', isPrimary: true },
                { name: 'test_id', type: 'char', length: '36' },
                { name: 'text', type: 'text' },
                { name: 'category', type: 'varchar' }, // Наприклад: "Arithmetic Reasoning"
                { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
            ],
        }));

        await queryRunner.createForeignKey('asvab_questions', new TableForeignKey({
            columnNames: ['test_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'asvab_tests',
            onDelete: 'CASCADE',
        }));

        // asvab_answers
        await queryRunner.createTable(new Table({
            name: 'asvab_answers',
            columns: [
                { name: 'id', type: 'char', length: '36', isPrimary: true },
                { name: 'question_id', type: 'char', length: '36' },
                { name: 'text', type: 'varchar' },
                { name: 'is_correct', type: 'boolean', default: false },
            ],
        }));

        await queryRunner.createForeignKey('asvab_answers', new TableForeignKey({
            columnNames: ['question_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'asvab_questions',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('asvab_answers');
        await queryRunner.dropTable('asvab_questions');
        await queryRunner.dropTable('asvab_tests');
    }

}
