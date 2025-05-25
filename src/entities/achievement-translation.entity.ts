import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn
} from 'typeorm';
import { Achievement } from './achievement.entity';

@Entity('achievement_translations')
export class AchievementTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    achievement_id: string;

    @Column({ length: 5 })
    language: string;

    @Column()
    title: string;

    @Column({ type: 'text', nullable: true })
    description?: string;

    @ManyToOne(() => Achievement, achievement => achievement.translations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'achievement_id' })
    achievement: Achievement;
}
