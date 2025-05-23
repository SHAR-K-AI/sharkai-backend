import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import {EnvironmentTypesService} from "../services/environment-types.service";
import {CreateEnvironmentTypeDto} from "../dto/create-environment-type.dto";
import {UpdateEnvironmentTypeDto} from "../dto/update-environment-type.dto";

@Controller('environment-types')
export class EnvironmentTypesController {
    constructor(private readonly service: EnvironmentTypesService) {}

    @Post()
    create(@Body() dto: CreateEnvironmentTypeDto) {
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
    update(@Param('id') id: string, @Body() dto: UpdateEnvironmentTypeDto) {
        return this.service.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(+id);
    }
}
