import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { LearningPathDay } from './learning-path-day.entity';
import {User} from "./user.entity";
import {LearningPathTranslation} from "./learning-path-translation.entity";

@Entity('learning_paths')
export class LearningPath {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, user => user.learningPaths, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' })
    user: User;

    @Column({ name: 'start_date', type: 'date' })
    startDate: string;

    @Column({ name: 'end_date', type: 'date' })
    endDate: string;

    @OneToMany(() => LearningPathDay, day => day.learningPath)
    days: LearningPathDay[];

    @OneToMany(() => LearningPathTranslation, translation => translation.learningPath, { cascade: true })
    translations: LearningPathTranslation[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
