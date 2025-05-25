import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {LearningPathService} from "../services/learning-path.service";
import {CreateLearningPathDto} from "../dto/create-learning-path.dto";
import {UpdateLearningPathDto} from "../dto/update-learning-path.dto";

@Controller('learning-paths')
export class LearningPathController {
    constructor(private readonly learningPathService: LearningPathService) {}

    @Post()
    create(@Body() dto: CreateLearningPathDto) {
        return this.learningPathService.create(dto);
    }

    @Get()
    findAll() {
        return this.learningPathService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.learningPathService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateLearningPathDto) {
        return this.learningPathService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.learningPathService.remove(id);
    }
}
