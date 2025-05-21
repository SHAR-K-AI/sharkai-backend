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

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    name: string;

    @Column({ nullable: true }) // null якщо Google/Facebook
    password: string;

    @Column({ nullable: true }) // наприклад: google ID або facebook ID
    oauth_id: string;

    @Column({ nullable: true }) // "google" | "facebook" | null
    provider: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

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

    @OneToMany(() => UserCourse, userCourse => userCourse.user)
    userCourses: UserCourse[];

}
