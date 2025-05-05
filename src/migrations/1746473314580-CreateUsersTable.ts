import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateUsersTable1746473314580 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        // Таблиця users
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
                        name: 'name',
                        type: 'varchar',
                    },
                    {
                        name: 'password',
                        type: 'varchar',
                        isNullable: true, // не обов'язкове для OAuth
                    },
                    {
                        name: 'oauth_id',
                        type: 'varchar',
                        isNullable: true,
                    },
                    {
                        name: 'provider',
                        type: 'varchar',
                        isNullable: true, // 'google', 'facebook', або null для звичайної авторизації
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

        // Таблиця users_roles (зв’язок many-to-many)
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

        // Зовнішній ключ: user_id → users.id
        await queryRunner.createForeignKey(
            'users_roles',
            new TableForeignKey({
                columnNames: ['user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                onDelete: 'CASCADE',
            }),
        );

        // Зовнішній ключ: role_id → roles.id
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
