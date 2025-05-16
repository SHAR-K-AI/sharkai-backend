import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateGallupTestAndQuestions1747324557271 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`gallup_tests\`
            (
                \`id\`          INT AUTO_INCREMENT PRIMARY KEY,
                \`title\`       VARCHAR(255) NOT NULL,
                \`description\` TEXT,
                \`created_at\`  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                \`updated_at\`  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);

        await queryRunner.query(`
            CREATE TABLE \`gallup_questions\`
            (
                \`id\`              INT AUTO_INCREMENT PRIMARY KEY,
                \`left_statement\`  TEXT NOT NULL,
                \`right_statement\` TEXT NOT NULL,
                \`test_id\`         INT,
                CONSTRAINT \`FK_gallup_test_id\` FOREIGN KEY (\`test_id\`) REFERENCES \`gallup_tests\` (\`id\`) ON DELETE CASCADE
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`gallup_questions\``);
        await queryRunner.query(`DROP TABLE \`gallup_tests\``);
    }

}
