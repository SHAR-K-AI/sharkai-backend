// course-translation.entity.ts
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from "typeorm";
import { Course } from "./course.entity";

@Entity("courses_translations")
export class CourseTranslation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    course_id: number;

    @Column({name: 'language_code', length: 5})
    languageCode: string;

    @Column()
    field: string;

    @Column("text")
    value: string;

    @ManyToOne(() => Course, (course) => course.translations, {
        onDelete: "CASCADE",
    })
    @JoinColumn({ name: "course_id" })
    course: Course;
}
