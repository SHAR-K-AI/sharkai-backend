import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('professions')
export class Profession {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column('text')
    description: string;

    @Column()
    category: string;

    @Column('text', { nullable: true })
    skills_required: string;  // JSON як текст

    @Column('text', { nullable: true })
    education_level: string;

    @Column('text', { nullable: true })
    experience_level: string;

    @Column('text', { nullable: true })
    salary_range: string;

    @Column('double', { nullable: true })
    demand_score: number;

    @Column('double', { nullable: true })
    growth_projection: number;

    @Column('text', { nullable: true })
    soft_skills: string;

    @Column('text', { nullable: true })
    hard_skills: string;

    @Column('text', { nullable: true })
    examples_of_jobs: string;

    @Column('text', { nullable: true })
    learning_paths: string;

    @Column('text', { nullable: true })
    similar_professions: string;  // Можна використовувати список як текст або окрему таблицю для зв'язків

    @Column('text', { nullable: true })
    tags: string;  // Можна використовувати список як текст

    @Column('text', { nullable: true })
    origin_standard: string;

    @Column('text', { nullable: true })
    region: string;  // Можна використовувати список як текст

    @Column('text', { nullable: true })
    embedding_vector: string;

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @Column('timestamp', { default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
}
