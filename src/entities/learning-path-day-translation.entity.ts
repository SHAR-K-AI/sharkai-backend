import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { LearningPathDay } from './learning-path-day.entity';

@Entity('learning_path_day_translations')
export class LearningPathDayTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    learning_path_day_id: string;

    @Column({ length: 5 })
    language: string;

    @Column()
    title: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @ManyToOne(() => LearningPathDay, day => day.translations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'learning_path_day_id' })
    learningPathDay: LearningPathDay;
}
