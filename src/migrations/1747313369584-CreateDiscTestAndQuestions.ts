import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDiscTestAndQuestions1747313369584 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE \`disc_tests\`
            (
                \`id\`          INT AUTO_INCREMENT PRIMARY KEY,
                \`title\`       VARCHAR(255) NOT NULL,
                \`description\` TEXT,
                \`created_at\`  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                \`updated_at\`  TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);

        await queryRunner.query(`
            CREATE TABLE \`disc_questions\`
            (
                \`id\`      INT AUTO_INCREMENT PRIMARY KEY,
                \`text\`    TEXT       NOT NULL,
                \`style\`   VARCHAR(1) NOT NULL,
                \`test_id\` INT,
                CONSTRAINT \`CHK_disc_style\` CHECK (\`style\` IN ('D', 'I', 'S', 'C')),
                CONSTRAINT \`FK_disc_test_id\` FOREIGN KEY (\`test_id\`) REFERENCES \`disc_tests\` (\`id\`) ON DELETE CASCADE
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`disc_questions\``);
        await queryRunner.query(`DROP TABLE \`disc_tests\``);
    }

}
