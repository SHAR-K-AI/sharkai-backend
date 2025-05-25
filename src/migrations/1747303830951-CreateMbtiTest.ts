import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateMbtiTest1747303830951 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(new Table({
            name: 'mbti_tests',
            columns: [
                {name: 'id', type: 'char', length: '36', isPrimary: true, isGenerated: false},
                {name: 'title', type: 'varchar', isNullable: true},
                {name: 'subtitle', type: 'varchar', isNullable: true},
                {name: 'description', type: 'text', isNullable: true},
                {name: 'img_src', type: 'varchar', isNullable: true},
                {name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP'},
            ],
        }));

        await queryRunner.createTable(new Table({
            name: 'mbti_test_translations',
            columns: [
                {name: 'id', type: 'char', length: '36', isPrimary: true},
                {name: 'test_id', type: 'char', length: '36'},
                {name: 'locale', type: 'varchar'},
                {name: 'title', type: 'varchar', isNullable: true},
                {name: 'subtitle', type: 'varchar', isNullable: true},
                {name: 'description', type: 'text', isNullable: true},
            ],
        }));

        await queryRunner.createForeignKey('mbti_test_translations', new TableForeignKey({
            columnNames: ['test_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'mbti_tests',
            onDelete: 'CASCADE',
        }));

        await queryRunner.createTable(new Table({
            name: 'mbti_questions',
            columns: [
                {name: 'id', type: 'char', length: '36', isPrimary: true},
                {name: 'test_id', type: 'char', length: '36'},
                {name: 'text', type: 'text', isNullable: true},
                {name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP'},
            ],
        }));

        await queryRunner.createForeignKey('mbti_questions', new TableForeignKey({
            columnNames: ['test_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'mbti_tests',
            onDelete: 'CASCADE',
        }));

        await queryRunner.createTable(new Table({
            name: 'mbti_question_translations',
            columns: [
                {name: 'id', type: 'char', length: '36', isPrimary: true},
                {name: 'question_id', type: 'char', length: '36'},
                {name: 'locale', type: 'varchar'},
                {name: 'text', type: 'text', isNullable: true},
            ],
        }));

        await queryRunner.createForeignKey('mbti_question_translations', new TableForeignKey({
            columnNames: ['question_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'mbti_questions',
            onDelete: 'CASCADE',
        }));

        await queryRunner.createTable(new Table({
            name: 'mbti_options',
            columns: [
                {name: 'id', type: 'char', length: '36', isPrimary: true},
                {name: 'question_id', type: 'char', length: '36'},
                {name: 'dimension', type: 'varchar'},
                {name: 'img_src', type: 'varchar', isNullable: true},
                {name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP'},
            ],
        }));

        await queryRunner.createForeignKey('mbti_options', new TableForeignKey({
            columnNames: ['question_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'mbti_questions',
            onDelete: 'CASCADE',
        }));

        await queryRunner.createTable(new Table({
            name: 'mbti_option_translations',
            columns: [
                {name: 'id', type: 'char', length: '36', isPrimary: true},
                {name: 'option_id', type: 'char', length: '36'},
                {name: 'locale', type: 'varchar'},
                {name: 'text', type: 'text', isNullable: true},
                {name: 'description', type: 'text', isNullable: true},
            ],
        }));

        await queryRunner.createForeignKey('mbti_option_translations', new TableForeignKey({
            columnNames: ['option_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'mbti_options',
            onDelete: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('mbti_option_translations');
        await queryRunner.dropTable('mbti_options');
        await queryRunner.dropTable('mbti_question_translations');
        await queryRunner.dropTable('mbti_questions');
        await queryRunner.dropTable('mbti_test_translations');
        await queryRunner.dropTable('mbti_tests');
    }
}
