import {
    Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany,
} from 'typeorm';
import { EducationLevelTranslation } from './education-level-translation.entity';

@Entity('education_levels')
export class EducationLevel {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => EducationLevelTranslation, (t) => t.level, { cascade: true })
    translations: EducationLevelTranslation[];
}
