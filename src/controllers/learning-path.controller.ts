import { Controller, Get, Post, Body, Param, Patch, Delete, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {LearningPathService} from "../services/learning-path.service";
import {CreateLearningPathDto} from "../dto/create-learning-path.dto";
import {UpdateLearningPathDto} from "../dto/update-learning-path.dto";


@UseGuards(JwtAuthGuard)
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

    @Get('latest')
    async getLatest(@Req() req: Request) {
        const userId = req.user['id'];
        return this.learningPathService.findLatestByUser(userId);
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
