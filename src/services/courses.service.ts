import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Course } from "src/entities/course.entity";
import { Repository } from "typeorm";
import {CourseTranslation} from "../entities/course-translation.entity";
import {CreateCourseDto} from "../dto/create-course.dto";
import {UpdateCourseDto} from "../dto/update-course.dto";


@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(Course)
        private readonly courseRepository: Repository<Course>,
        @InjectRepository(CourseTranslation)
        private readonly translationRepository: Repository<CourseTranslation>,
    ) {}

    async create(createCourseDto: CreateCourseDto): Promise<Course> {
        const course = this.courseRepository.create({
            url: createCourseDto.url,
            duration_hours: createCourseDto.duration_hours,
            provider: createCourseDto.provider,
        });

        if (createCourseDto.translations?.length) {
            course.translations = createCourseDto.translations.map((t) =>
                this.translationRepository.create(t),
            );
        }

        return await this.courseRepository.save(course);
    }

    async findAll(): Promise<Course[]> {
        return this.courseRepository.find({ relations: ["translations"] });
    }

    async findOne(id: number): Promise<Course> {
        const course = await this.courseRepository.findOne({
            where: { id },
            relations: ["translations"],
        });
        if (!course) {
            throw new NotFoundException(`Course with id=${id} not found`);
        }
        return course;
    }

    async update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
        const course = await this.findOne(id);

        if (updateCourseDto.url !== undefined) course.url = updateCourseDto.url;
        if (updateCourseDto.duration_hours !== undefined)
            course.duration_hours = updateCourseDto.duration_hours;
        if (updateCourseDto.provider !== undefined)
            course.provider = updateCourseDto.provider;

        if (updateCourseDto.translations) {
            await this.translationRepository.delete({ course_id: id });
            course.translations = updateCourseDto.translations.map((t) =>
                this.translationRepository.create({ ...t, course_id: id }),
            );
        }

        return this.courseRepository.save(course);
    }

    async remove(id: number): Promise<void> {
        const course = await this.findOne(id);
        await this.courseRepository.remove(course);
    }
}
