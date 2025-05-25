import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { LearningPath } from './learning-path.entity';

@Entity('learning_path_translations')
export class LearningPathTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    learning_path_id: string;

    @Column({ length: 5 })
    language: string;

    @Column()
    title: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @ManyToOne(() => LearningPath, path => path.translations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'learning_path_id' })
    learningPath: LearningPath;
}
