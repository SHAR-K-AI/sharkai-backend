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

    @ManyToOne(() => EducationLevel, educationLevel => educationLevel.translations, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    })
    @JoinColumn({ name: 'education_level_id' })
    educationLevel: EducationLevel;

    @Column()
    field: string;

    @Column('text')
    value: string;

}
