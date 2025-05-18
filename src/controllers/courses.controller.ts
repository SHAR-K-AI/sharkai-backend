import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    ParseIntPipe,
} from "@nestjs/common";
import {CourseService} from "../services/courses.service";
import {Course} from "../entities/course.entity";
import {CreateCourseDto} from "../dto/create-course.dto";
import {UpdateCourseDto} from "../dto/update-course.dto";


@Controller("courses")
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Post()
    create(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
        return this.courseService.create(createCourseDto);
    }

    @Get()
    findAll(): Promise<Course[]> {
        return this.courseService.findAll();
    }

    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: number): Promise<Course> {
        return this.courseService.findOne(id);
    }

    @Put(":id")
    update(
        @Param("id", ParseIntPipe) id: number,
        @Body() updateCourseDto: UpdateCourseDto,
    ): Promise<Course> {
        return this.courseService.update(id, updateCourseDto);
    }

    @Delete(":id")
    remove(@Param("id", ParseIntPipe) id: number): Promise<void> {
        return this.courseService.remove(id);
    }
}
