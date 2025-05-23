import {
    Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany,
} from 'typeorm';
import { EducationLevelTranslation } from './education-level-translation.entity';
import {User} from "./user.entity";

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

    @ManyToMany(() => User, (user) => user.educationLevels)
    users: User[];

}
