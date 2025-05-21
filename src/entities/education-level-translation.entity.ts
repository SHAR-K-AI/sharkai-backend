import {
    Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn,
} from 'typeorm';
import { EducationLevel } from './education-level.entity';

@Entity('education_levels_translations')
export class EducationLevelTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'language_code', length: 5})
    languageCode: string;

    @Column()
    field: string;

    @Column('text')
    value: string;

    @ManyToOne(() => EducationLevel, (level) => level.translations, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'education_level_id' })
    level: EducationLevel;

}
