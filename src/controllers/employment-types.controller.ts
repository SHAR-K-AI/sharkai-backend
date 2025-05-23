import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {EmploymentTypesService} from "../services/employment-types.service";
import {CreateEmploymentTypeDto} from "../dto/create-employment-type.dto";
import {UpdateEmploymentTypeDto} from "../dto/update-employment-type.dto";

@Controller('employment-types')
export class EmploymentTypesController {
    constructor(private readonly service: EmploymentTypesService) {}

    @Post()
    create(@Body() dto: CreateEmploymentTypeDto) {
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

    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateEmploymentTypeDto) {
        return this.service.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(+id);
    }
}
