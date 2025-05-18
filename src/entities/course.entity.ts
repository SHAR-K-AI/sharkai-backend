// course.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from "typeorm";
import { CourseTranslation } from "./course-translation.entity";
import {UserCourse} from "./users-courses.entity";

@Entity("courses")
export class Course {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    url: string;

    @Column({ type: "int", nullable: true })
    duration_hours?: number;

    @Column({ nullable: true })
    provider?: string;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @OneToMany(() => CourseTranslation, (translation) => translation.course, {
        cascade: true,
    })
    translations: CourseTranslation[];

    @OneToMany(() => UserCourse, userCourse => userCourse.course)
    userCourses: UserCourse[];
}
