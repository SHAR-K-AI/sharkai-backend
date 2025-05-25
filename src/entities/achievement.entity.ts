import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from 'typeorm';
import {AchievementTranslation} from "./achievement-translation.entity";

@Entity('achievements')
export class Achievement {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    icon?: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => AchievementTranslation, translation => translation.achievement, { cascade: true })
    translations: AchievementTranslation[];
}
