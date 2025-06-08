import {
    Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany,
} from 'typeorm';
import { EducationLevelTranslation } from './education-level-translation.entity';
import {User} from "./user.entity";

@Entity('education_levels')
export class EducationLevel {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'timestamptz' })
    created_at: Date;

    @UpdateDateColumn({ type: 'timestamptz' })
    updated_at: Date;

    @OneToMany(() => EducationLevelTranslation, translation => translation.educationLevel, {
        cascade: true,
        eager: false,
    })
    translations: EducationLevelTranslation[];

    @ManyToMany(() => User, (user) => user.educationLevels)
    users: User[];

}
