// entities/career-path-step.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { CareerPath } from './career-path.entity';

@Entity('career_path_steps')
export class CareerPathStep {
    @PrimaryGeneratedColumn('increment')
    step_id: number;

    @Column()
    title: string;

    @Column('text', { nullable: true })
    description: string;

    @Column()
    step_type: string; // test, course, mentor, coach, training, etc.

    @Column({ nullable: true })
    reference_id: number; // ID пов’язаного ресурсу (наприклад test_id, course_id)

    @Column({ default: 0 })
    step_order: number;

    @ManyToOne(() => CareerPath, path => path.steps, { onDelete: 'CASCADE' })
    careerPath: CareerPath;
}
