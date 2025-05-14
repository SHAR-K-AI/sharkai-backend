import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import {ProfessionCategoriesService} from "../services/profession-categories.service";
import {CreateProfessionCategoryDto} from "../dto/create-profession-category.dto";
import {UpdateProfessionCategoryDto} from "../dto/update-profession-category.dto";

@Controller('profession-categories')
export class ProfessionCategoriesController {
    constructor(private readonly service: ProfessionCategoriesService) {}

    @Post()
    create(@Body() dto: CreateProfessionCategoryDto) {
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
    update(@Param('id') id: string, @Body() dto: UpdateProfessionCategoryDto) {
        return this.service.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(+id);
    }
}
