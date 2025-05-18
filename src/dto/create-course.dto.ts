import { CourseTranslationDto } from "./course-translation.dto";

export class CreateCourseDto {
    url: string;
    duration_hours?: number;
    provider?: string;
    translations?: CourseTranslationDto[];
}