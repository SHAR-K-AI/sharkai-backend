import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDefaultUsers1746477067652 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Додавання користувачів із вказанням значення для поля 'name'
        await queryRunner.query(`
            INSERT INTO users (email, password, name, created_at)
            VALUES ('admin@example.com', 'hashedAdminPassword', 'Admin', NOW()),
                   ('moderator@example.com', 'hashedModeratorPassword', 'Moderator', NOW()),
                   ('user@example.com', 'hashedUserPassword', 'User', NOW());
        `);

        // Додавання зв'язку між ролями та користувачами
        const [adminRole] = await queryRunner.query("SELECT id FROM roles WHERE name = 'admin'");
        const [moderatorRole] = await queryRunner.query("SELECT id FROM roles WHERE name = 'moderator'");
        const [userRole] = await queryRunner.query("SELECT id FROM roles WHERE name = 'user'");

        await queryRunner.query(`
            INSERT INTO users_roles (user_id, role_id)
            VALUES ((SELECT id FROM users WHERE email = 'admin@example.com'), ${adminRole.id}),
                   ((SELECT id FROM users WHERE email = 'moderator@example.com'), ${moderatorRole.id}),
                   ((SELECT id FROM users WHERE email = 'user@example.com'), ${userRole.id});
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE
            FROM users_roles
            WHERE user_id IN (SELECT id
                              FROM users
                              WHERE email IN ('admin@example.com', 'moderator@example.com', 'user@example.com'));
            DELETE
            FROM users
            WHERE email IN ('admin@example.com', 'moderator@example.com', 'user@example.com');
        `);
    }

}
