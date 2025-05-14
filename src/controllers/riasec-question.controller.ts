// src/riasec/riasec-question.controller.ts

import { Controller, Post, Body, Param, Put, Get, Delete } from '@nestjs/common';
import {RiasecQuestionService} from "../services/riasec-question.service";
import {CreateRiasecQuestionDto} from "../dto/create-riasec-question.dto";
import {UpdateRiasecQuestionDto} from "../dto/update-riasec-question.dto";

@Controller('riasec-questions')
export class RiasecQuestionController {
    constructor(private readonly service: RiasecQuestionService) {}

    @Post()
    create(@Body() dto: CreateRiasecQuestionDto) {
        return this.service.create(dto);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.service.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateRiasecQuestionDto) {
        return this.service.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(+id);
    }
}
