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
import {Test} from "./test.entity";
import {Publication} from "./publication.entity";

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
    test_id: string | null;

    @ManyToOne(() => Test, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'test_id' })
    test: Test;

    @Column({ type: 'int', nullable: true })
    publication_id: number | null;

    @ManyToOne(() => Publication, { nullable: true, onDelete: 'SET NULL' })
    @JoinColumn({ name: 'publication_id' })
    publication: Publication;

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
