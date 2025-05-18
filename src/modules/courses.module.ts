import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {CourseController} from "../controllers/courses.controller";
import {CourseService} from "../services/courses.service";

import { Course } from '../entities/course.entity';
import { CourseTranslation } from '../entities/course-translation.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Course, CourseTranslation])],
    controllers: [CourseController],
    providers: [CourseService],
})
export class CourseModule {}
