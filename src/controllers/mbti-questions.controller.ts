import { Controller, Get, Post, Patch, Delete, Param, Body, Query } from '@nestjs/common';
import {MbtiQuestionsService} from "../services/mbti-questions.service";
import { CreateMbtiQuestionDto } from 'src/dto/create-mbti-question.dto';
import {UpdateMbtiQuestionDto} from "../dto/update-mbti-question.dto";


@Controller('mbti-questions')
export class MbtiQuestionsController {
    constructor(private readonly service: MbtiQuestionsService) {}

    @Post()
    create(@Body() createDto: CreateMbtiQuestionDto) {
        return this.service.create(createDto);
    }

    @Get()
    findAll(@Query('test_id') test_id?: string) {
        return this.service.findAll(test_id);
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.service.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateDto: UpdateMbtiQuestionDto) {
        return this.service.update(id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(id);
    }
}
