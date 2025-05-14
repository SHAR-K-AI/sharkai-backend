// entities/career-path.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { CareerPathStep } from './career-path-step.entity';

@Entity('career_paths')
export class CareerPath {
    @PrimaryGeneratedColumn('increment')
    path_id: number;

    @Column()
    title: string;

    @Column('text', { nullable: true })
    description: string;

    @Column({ default: 'upskill' }) // або 'reskill', 'switch'
    goal_type: string;

    @OneToMany(() => CareerPathStep, step => step.careerPath, { cascade: true })
    steps: CareerPathStep[];
}
