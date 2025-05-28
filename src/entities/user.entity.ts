import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToMany,
    JoinTable,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne, JoinColumn, OneToMany,
} from 'typeorm';
import { Role } from './roles.entity';
import { Category } from './career-category.entity';
import {UserMbtiResult} from "./user-mbti-result.entity";
import {Profession} from "./profession.entity";
import {Skill} from "./skill.entity";
import {UserCourse} from "./users-courses.entity";
import {Interest} from "./interest.entity";
import {EducationLevel} from "./education-level.entity";
import {Principle} from "./principle.entity";
import {EnvironmentType} from "./environment-type.entity";
import {EmploymentType} from "./employment-type.entity";
import {LearningPath} from "./learning-path.entity";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    name: string;

    @Column({ type: 'date', nullable: true })
    dob: Date;

    @Column({ name: 'refresh_token', nullable: true })
    refreshToken: string;

    @Column({ nullable: true })
    password: string;

    @Column({ nullable: true })
    oauth_id: string;

    @Column({ nullable: true })
    provider: string;

    @Column({ nullable: true })
    education: string;

    @Column({ nullable: true })
    first_name?: string;

    @Column({ nullable: true })
    last_name?: string;

    @Column({ nullable: true })
    nickname?: string;

    @Column({ nullable: true })
    position?: string;

    @Column({ nullable: true })
    country?: string;

    @Column({ nullable: true, type: 'text' })
    bio?: string;

    @Column({ nullable: true, type: 'float' })
    rating?: number;

    @Column({ nullable: true })
    linkedin?: string;

    @Column({ nullable: true })
    github?: string;

    @Column({ nullable: true })
    twitter?: string;

    @Column({ nullable: true })
    facebook?: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToMany(() => Role)
    @JoinTable({
        name: 'users_roles',
        joinColumn: { name: 'user_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' },
    })
    roles: Role[];

    @OneToMany(() => UserMbtiResult, (mbtiResult) => mbtiResult.user)
    mbtiResults: UserMbtiResult[];

    @ManyToMany(() => Profession)
    @JoinTable({
        name: "users_professions",
        joinColumn: { name: "user_id", referencedColumnName: "id" },
        inverseJoinColumn: { name: "profession_id", referencedColumnName: "id" }
    })
    professions: Profession[];


    @ManyToMany(() => Skill)
    @JoinTable({
        name: "users_skills",
        joinColumn: { name: "user_id", referencedColumnName: "id" },
        inverseJoinColumn: { name: "skill_id", referencedColumnName: "id" }
    })
    skills: Skill[];

    @ManyToMany(() => Interest, { cascade: true })
    @JoinTable({
        name: 'users_interests',
        joinColumn: { name: 'user_id', referencedColumnName: 'id' },
        inverseJoinColumn: { name: 'interest_id', referencedColumnName: 'id' },
    })
    interests: Interest[];

    @ManyToMany(() => EducationLevel, { cascade: true })
    @JoinTable({
        name: 'users_education_levels',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'education_level_id',
            referencedColumnName: 'id',
        },
    })
    educationLevels: EducationLevel[];

    @ManyToMany(() => Principle, { cascade: true })
    @JoinTable({
        name: 'users_principles',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'principle_id',
            referencedColumnName: 'id',
        },
    })
    principles: Principle[];

    @ManyToMany(() => EnvironmentType, { cascade: true })
    @JoinTable({
        name: 'users_environment_types',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'environment_type_id',
            referencedColumnName: 'id',
        },
    })
    environmentTypes: EnvironmentType[];

    @ManyToMany(() => EmploymentType, { cascade: true })
    @JoinTable({
        name: 'users_employment_types',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'employment_type_id',
            referencedColumnName: 'id',
        },
    })
    employmentTypes: EmploymentType[];


    @OneToMany(() => UserCourse, userCourse => userCourse.user)
    userCourses: UserCourse[];

    @OneToMany(() => LearningPath, path => path.user)
    learningPaths: LearningPath[];

}
