import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTestsStructure1746719367060 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE tests
            (
                test_id     BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                name        VARCHAR(255) NOT NULL,
                description TEXT,
                test_type   VARCHAR(50) CHECK (test_type IN ('personality', 'interest', 'skills')),
                created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

        await queryRunner.query(`
            CREATE TABLE test_questions
            (
                question_id   BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                test_id       BIGINT UNSIGNED NOT NULL,
                question_text TEXT NOT NULL,
                question_type VARCHAR(50) CHECK (question_type IN
                                                 ('single_choice', 'multiple_choice', 'scale', 'text_input')),
                \`order\`     INTEGER DEFAULT 0,
                FOREIGN KEY (test_id) REFERENCES tests (test_id) ON DELETE CASCADE
            );
        `);

        await queryRunner.query(`
            CREATE TABLE test_answers
            (
                answer_id   BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                question_id BIGINT UNSIGNED NOT NULL,
                answer_text TEXT NOT NULL,
                score_value FLOAT DEFAULT 0,
                category    VARCHAR(100),
                FOREIGN KEY (question_id) REFERENCES test_questions (question_id) ON DELETE CASCADE
            );
        `);

        await queryRunner.query(`
            CREATE TABLE test_logic
            (
                logic_id       BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                test_id        BIGINT UNSIGNED NOT NULL,
                category       VARCHAR(100) NOT NULL,
                description    TEXT,
                recommendation TEXT,
                FOREIGN KEY (test_id) REFERENCES tests (test_id) ON DELETE CASCADE
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS test_logic;`);
        await queryRunner.query(`DROP TABLE IF EXISTS test_answers;`);
        await queryRunner.query(`DROP TABLE IF EXISTS test_questions;`);
        await queryRunner.query(`DROP TABLE IF EXISTS tests;`);
    }
}
