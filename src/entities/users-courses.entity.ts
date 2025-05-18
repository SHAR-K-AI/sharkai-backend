import {Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn} from "typeorm";
import {User} from "./user.entity";
import {Course} from "./course.entity";

@Entity("users_courses")
export class UserCourse {
    @PrimaryColumn()
    user_id: number;

    @PrimaryColumn()
    course_id: number;

    @Column({ type: 'varchar', length: 20, default: 'planned' })
    status: 'planned' | 'started' | 'completed';

    @Column({ type: 'int', default: 0 })
    progress: number;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(() => User, user => user.userCourses)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Course, course => course.userCourses)
    @JoinColumn({ name: 'course_id' })
    course: Course;
}
