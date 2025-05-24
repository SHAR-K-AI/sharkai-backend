import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { LearningPathDay } from './learning-path-day.entity';
import {User} from "./user.entity";

@Entity('learning_paths')
export class LearningPath {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: number;

    @ManyToOne(() => User, user => user.learningPaths, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column()
    title: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @Column({ type: 'date' })
    start_date: string;

    @Column({ type: 'date' })
    end_date: string;

    @OneToMany(() => LearningPathDay, day => day.learningPath)
    days: LearningPathDay[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
