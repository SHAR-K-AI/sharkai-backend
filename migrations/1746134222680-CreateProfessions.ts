import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateProfessions1746134222680 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE isco_categories
            (
                code        VARCHAR(10) PRIMARY KEY,
                title       VARCHAR(255) NOT NULL,
                level       INT          NOT NULL,
                definition  TEXT,
                parent_code VARCHAR(10),
                FOREIGN KEY (parent_code) REFERENCES isco_categories (code) ON DELETE SET NULL
            );
        `);

        await queryRunner.query(`
            CREATE TABLE professions
            (
                id               CHAR(36) PRIMARY KEY,
                title            VARCHAR(255) NOT NULL,
                description      TEXT         NOT NULL,
                category_code    VARCHAR(10)  NOT NULL,
                origin_standard  VARCHAR(50),
                region           VARCHAR(100),
                embedding_vector TEXT, -- JSON or CSV encoded vector
                created_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at       TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
                FOREIGN KEY (category_code) REFERENCES isco_categories (code)
            );
        `);

        await queryRunner.query(`
            CREATE TABLE skills
            (
                id   CHAR(36) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                type ENUM('soft', 'hard') NOT NULL
            );
        `);

        await queryRunner.query(`
            CREATE TABLE profession_skills
            (
                profession_id CHAR(36) NOT NULL,
                skill_id      CHAR(36) NOT NULL,
                PRIMARY KEY (profession_id, skill_id),
                FOREIGN KEY (profession_id) REFERENCES professions (id) ON DELETE CASCADE,
                FOREIGN KEY (skill_id) REFERENCES skills (id) ON DELETE CASCADE
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE profession_skills`);
        await queryRunner.query(`DROP TABLE skills`);
        await queryRunner.query(`DROP TABLE professions`);
        await queryRunner.query(`DROP TABLE isco_categories`);
    }
}
