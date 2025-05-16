import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCareerPaths1746730462448 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE career_paths
            (
                path_id     BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                logic_id    BIGINT UNSIGNED NOT NULL,
                title       VARCHAR(255) NOT NULL,
                description TEXT,
                path_type   ENUM('entry', 'improvement', 'transition') NOT NULL,
                created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                FOREIGN KEY (logic_id) REFERENCES test_logic (logic_id) ON DELETE CASCADE
            );
        `);

        await queryRunner.query(`
            CREATE TABLE career_path_steps
            (
                step_id       BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                path_id       BIGINT UNSIGNED NOT NULL,
                step_type     ENUM('test', 'course', 'coach', 'mentor', 'training', 'internship', 'project', 'other') NOT NULL,
                title         VARCHAR(255) NOT NULL,
                description   TEXT,
                external_link TEXT,
                \`order\`     INTEGER DEFAULT 0,
                FOREIGN KEY (path_id) REFERENCES career_paths (path_id) ON DELETE CASCADE
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS career_path_steps;`);
        await queryRunner.query(`DROP TABLE IF EXISTS career_paths;`);
    }

}
