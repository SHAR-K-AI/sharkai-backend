import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany
} from 'typeorm';
import { LearningPath } from './learning-path.entity';
import {Achievement} from "./achievement.entity";
import {LearningPathDayTranslation} from "./learning-path-day-translation.entity";

@Entity('learning_path_days')
export class LearningPathDay {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    learning_path_id: string;

    @ManyToOne(() => LearningPath, path => path.days, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'learning_path_id' })
    learningPath: LearningPath;

    @OneToMany(() => LearningPathDayTranslation, translation => translation.learningPathDay, { cascade: true })
    translations: LearningPathDayTranslation[];

    @Column()
    day_number: number;

    @Column({ type: 'date' })
    date: string;

    @Column()
    task_type: string;

    @Column({ type: 'uuid', nullable: true })
    test_id?: string;

    @Column({ type: 'uuid', nullable: true })
    achievement_id?: string;

    @ManyToOne(() => Achievement, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'achievement_id' })
    achievement?: Achievement;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}
