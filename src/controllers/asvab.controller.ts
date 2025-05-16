import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import {AsvabService} from "../services/asvab.service";
import {CreateAsvabTestDto} from "../dto/create-asvab-test.dto";
import {UpdateAsvabTestDto} from "../dto/update-asvab-test.dto";


@Controller('asvab-tests')
export class AsvabController {
    constructor(private readonly service: AsvabService) {}

    @Post()
    create(@Body() dto: CreateAsvabTestDto) {
        return this.service.create(dto);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.service.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateAsvabTestDto) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(id);
    }
}
