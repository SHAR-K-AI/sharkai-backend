import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EducationLevelService } from '../services/education-level.service';
import {CreateEducationLevelDto} from "../dto/create-education-level.dto";
import {UpdateEducationLevelDto} from "../dto/update-education-level.dto";


@Controller('education-levels')
export class EducationLevelController {
    constructor(private readonly service: EducationLevelService) {}

    @Post()
    create(@Body() dto: CreateEducationLevelDto) {
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
    update(@Param('id') id: string, @Body() dto: UpdateEducationLevelDto) {
        return this.service.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(+id);
    }
}
