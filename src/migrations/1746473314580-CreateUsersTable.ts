import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateUsersTable1746473314580 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isUnique: true,
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'oauth_id',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'provider',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'refresh_token',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'first_name',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'last_name',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'dob',
                        type: 'date',
                        isNullable: true,
                    },
                    {
                        name: 'nickname',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'position',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'country',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'education',
                        type: 'text',
                        isNullable: true,
                    },
                    {
                        name: 'bio',
                        type: 'text',
                        isNullable: true,
                    },
                    {
                        name: 'rating',
                        type: 'float',
                        isNullable: true,
                        default: 0,
                    },
                    {
                        name: 'linkedin',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'github',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'twitter',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'facebook',
                        type: 'varchar',
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
            }),
        );

        await queryRunner.createTable(
            new Table({
                name: 'users_roles',
                columns: [
                    {
                        name: 'user_id',
                        type: 'int',
                        isPrimary: true,
                    },
                    {
                        name: 'role_id',
                        type: 'int',
                        isPrimary: true,
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey(
            'users_roles',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
            }),
        );

        await queryRunner.createForeignKey(
            'users_roles',
            new TableForeignKey({
                columnNames: ['role_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'roles',
                onDelete: 'CASCADE',
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users_roles');
        await queryRunner.dropTable('users');
    }
}
