import {
    Entity,
    PrimaryGeneratedColumn,
    ManyToOne,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany, JoinColumn, ManyToMany, JoinTable
} from 'typeorm';

import {ProfessionCategory} from './profession-category.entity';
import {ProfessionTranslation} from './profession-translation.entity';
import {Skill} from "./skill.entity";
import {Course} from "./course.entity";
import {User} from "./user.entity";

@Entity('professions')
export class Profession {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => ProfessionCategory, category => category.professions, {nullable: true, onDelete: 'SET NULL'})
    @JoinColumn({name: 'category_id'})
    category: ProfessionCategory;

    @Column({type: 'json', nullable: true})
    mbti: any;

    @Column({type: 'json', nullable: true})
    riasec: any;

    @Column({type: 'json', nullable: true})
    gallup: any;

    @Column({type: 'json', nullable: true})
    bigFiveIdeal: any;

    @Column({type: 'json', nullable: true})
    asvab: any;

    @Column({name: "salary_range", type: 'json', nullable: true})
    salaryRange: any;

    @Column({type: 'int', default: 0})
    demand: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => ProfessionTranslation, translation => translation.profession, {cascade: true})
    translations: ProfessionTranslation[];

    @ManyToMany(() => Skill)
    @JoinTable({
        name: "profession_skills",
        joinColumn: { name: "profession_id", referencedColumnName: "id" },
        inverseJoinColumn: { name: "skill_id", referencedColumnName: "id" },
    })
    skills: Skill[];

    @ManyToMany(() => Course)
    @JoinTable({
        name: "profession_courses",
        joinColumn: { name: "profession_id", referencedColumnName: "id" },
        inverseJoinColumn: { name: "course_id", referencedColumnName: "id" },
    })
    courses: Course[];

    @ManyToMany(() => User, user => user.professions)
    users: User[];
}
