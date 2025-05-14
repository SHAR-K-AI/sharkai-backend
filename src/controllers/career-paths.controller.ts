// controllers/career-paths.controller.ts
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CareerPathsService } from '../services/career-paths.service';
import { CreateCareerPathDto } from '../dto/create-career-path.dto';

@Controller('career-paths')
export class CareerPathsController {
    constructor(private readonly service: CareerPathsService) {}

    @Post()
    create(@Body() dto: CreateCareerPathDto) {
        return this.service.create(dto);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.service.findOne(Number(id));
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: CreateCareerPathDto) {
        return this.service.update(Number(id), dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(Number(id));
    }
}
