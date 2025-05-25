import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRolesTable1746472423946 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'roles',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isUnique: true,
                    },
                ],
            }),
        );

        await queryRunner.query(`
      INSERT INTO roles (name) VALUES 
        ('admin'),
        ('moderator'),
        ('user');
    `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('roles');
    }

}
