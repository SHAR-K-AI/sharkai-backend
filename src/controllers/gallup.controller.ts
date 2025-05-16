import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import {CreateGallupTestDto} from "../dto/create-gallup-test.dto";
import {UpdateGallupTestDto} from "../dto/update-gallup-test.dto";
import {GallupService} from "../services/gallup-test.service";

@Controller('gallup-tests')
export class GallupController {
    constructor(private readonly gallupService: GallupService) {}

    @Post()
    create(@Body() dto: CreateGallupTestDto) {
        return this.gallupService.create(dto);
    }

    @Get()
    findAll() {
        return this.gallupService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.gallupService.findOne(+id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateGallupTestDto) {
        return this.gallupService.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.gallupService.remove(+id);
    }
}
