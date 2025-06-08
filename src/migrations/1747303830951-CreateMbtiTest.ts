import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateMbtiTest1747303830951 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'mbti_tests',
            columns: [
                { name: 'id', type: 'uuid', isPrimary: true },
                { name: 'title', type: 'varchar', isNullable: true },
                { name: 'subtitle', type: 'varchar', isNullable: true },
                { name: 'description', type: 'text', isNullable: true },
                { name: 'img_src', type: 'varchar', isNullable: true },
                { name: 'created_at', type: 'timestamptz', default: 'now()' },
            ],
        }));

        await queryRunner.createTable(new Table({
            name: 'mbti_test_translations',
            columns: [
                { name: 'id', type: 'uuid', isPrimary: true },
                { name: 'test_id', type: 'uuid' },
                { name: 'locale', type: 'varchar', length: '5' },
                { name: 'title', type: 'varchar', isNullable: true },
                { name: 'subtitle', type: 'varchar', isNullable: true },
                { name: 'description', type: 'text', isNullable: true },
            ],
            uniques: [
                {
                    name: 'UQ_mbti_test_translations_test_locale',
                    columnNames: ['test_id', 'locale'],
                }
            ],
        }));

        await queryRunner.createForeignKey('mbti_test_translations', new TableForeignKey({
            columnNames: ['test_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'mbti_tests',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));

        await queryRunner.createTable(new Table({
            name: 'mbti_questions',
            columns: [
                { name: 'id', type: 'uuid', isPrimary: true },
                { name: 'test_id', type: 'uuid' },
                { name: 'text', type: 'text', isNullable: true },
                { name: 'created_at', type: 'timestamptz', default: 'now()' },
            ],
        }));

        await queryRunner.createForeignKey('mbti_questions', new TableForeignKey({
            columnNames: ['test_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'mbti_tests',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));

        await queryRunner.createTable(new Table({
            name: 'mbti_question_translations',
            columns: [
                { name: 'id', type: 'uuid', isPrimary: true },
                { name: 'question_id', type: 'uuid' },
                { name: 'locale', type: 'varchar', length: '5' },
                { name: 'text', type: 'text', isNullable: true },
            ],
            uniques: [
                {
                    name: 'UQ_mbti_question_translations_question_locale',
                    columnNames: ['question_id', 'locale'],
                }
            ],
        }));

        await queryRunner.createForeignKey('mbti_question_translations', new TableForeignKey({
            columnNames: ['question_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'mbti_questions',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));

        await queryRunner.createTable(new Table({
            name: 'mbti_options',
            columns: [
                { name: 'id', type: 'uuid', isPrimary: true },
                { name: 'question_id', type: 'uuid' },
                { name: 'dimension', type: 'varchar', length: '10' }, // Наприклад, 'EI', 'SN', 'TF', 'JP'
                { name: 'img_src', type: 'varchar', isNullable: true },
                { name: 'created_at', type: 'timestamptz', default: 'now()' },
            ],
        }));

        await queryRunner.createForeignKey('mbti_options', new TableForeignKey({
            columnNames: ['question_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'mbti_questions',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));

        await queryRunner.createTable(new Table({
            name: 'mbti_option_translations',
            columns: [
                { name: 'id', type: 'uuid', isPrimary: true },
                { name: 'option_id', type: 'uuid' },
                { name: 'locale', type: 'varchar', length: '5' },
                { name: 'text', type: 'text', isNullable: true },
                { name: 'description', type: 'text', isNullable: true },
            ],
            uniques: [
                {
                    name: 'UQ_mbti_option_translations_option_locale',
                    columnNames: ['option_id', 'locale'],
                }
            ],
        }));

        await queryRunner.createForeignKey('mbti_option_translations', new TableForeignKey({
            columnNames: ['option_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'mbti_options',
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const tables = [
            'mbti_option_translations',
            'mbti_options',
            'mbti_question_translations',
            'mbti_questions',
            'mbti_test_translations',
            'mbti_tests',
        ];

        for (const tableName of tables) {
            const table = await queryRunner.getTable(tableName);
            if (table) {
                for (const fk of table.foreignKeys) {
                    await queryRunner.dropForeignKey(tableName, fk);
                }
            }
            await queryRunner.dropTable(tableName);
        }
    }
}
