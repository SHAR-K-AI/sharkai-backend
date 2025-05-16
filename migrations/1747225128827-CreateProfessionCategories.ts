import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProfessionCategories1747225128827 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'profession_categories',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name_ua',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'name_en',
                    type: 'varchar',
                    length: '255',
                    isNullable: false,
                },
                {
                    name: 'description_ua',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'description_en',
                    type: 'text',
                    isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    onUpdate: 'CURRENT_TIMESTAMP',
                },
            ],
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('profession_categories');
    }

}
