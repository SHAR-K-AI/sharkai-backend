import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateRiasecTestAndQuestions1747246746111 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Таблиця тестів
        await queryRunner.createTable(
            new Table({
                name: 'riasec_tests',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'title',
                        type: 'varchar',
                    },
                    {
                        name: 'description',
                        type: 'text',
                        isNullable: true,
                    },
                ],
            }),
        );

        // Таблиця питань
        await queryRunner.createTable(
            new Table({
                name: 'riasec_questions',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'text',
                        type: 'text',
                        isNullable: false,
                    },
                    {
                        name: 'type',
                        type: 'enum',
                        enum: ['R', 'I', 'A', 'S', 'E', 'C'],
                        isNullable: false,
                    },
                    {
                        name: 'isActive',
                        type: 'boolean',
                        default: true,
                    },
                    {
                        name: 'testId',
                        type: 'int',
                        isNullable: false,
                    },
                ],
            }),
        );

        // Зовнішній ключ testId → riasec_tests.id
        await queryRunner.createForeignKey(
            'riasec_questions',
            new TableForeignKey({
                columnNames: ['testId'],
                referencedColumnNames: ['id'],
                referencedTableName: 'riasec_tests',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('riasec_questions');
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf('testId') !== -1);
        if (foreignKey) {
            await queryRunner.dropForeignKey('riasec_questions', foreignKey);
        }

        await queryRunner.dropTable('riasec_questions');
        await queryRunner.dropTable('riasec_tests');
    }

}
