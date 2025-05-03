import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateProfessions1746134222680 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE professions
            (
                id                  CHAR(36)         NOT NULL,
                title               VARCHAR(255)     NOT NULL,
                description         TEXT             NOT NULL,
                category            VARCHAR(255)     NOT NULL,
                skills_required     TEXT,
                education_level     VARCHAR(255),
                experience_level    VARCHAR(255),
                salary_range        TEXT,
                demand_score        DOUBLE PRECISION,
                growth_projection   DOUBLE PRECISION,
                soft_skills         TEXT,
                hard_skills         TEXT,
                examples_of_jobs    TEXT,
                learning_paths      TEXT,
                similar_professions TEXT,  -- You might want to serialize this as JSON or use a related table
                tags                TEXT,  -- Same as above, consider serialization
                origin_standard     VARCHAR(255),
                region              TEXT,  -- Consider JSON if storing multiple values
                embedding_vector    TEXT,
                updated_at          TIMESTAMP        DEFAULT CURRENT_TIMESTAMP,
                created_at          TIMESTAMP        DEFAULT CURRENT_TIMESTAMP,
                CONSTRAINT PK_professions_id PRIMARY KEY (id)
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE professions`);
    }

}
