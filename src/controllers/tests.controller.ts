import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import {TestsService} from "../services/tests.service";
import {CreateTestDto} from "../dto/create-test.dto";


@Controller('tests')
export class TestsController {
    constructor(private readonly testsService: TestsService) {}

    @Post()
    create(@Body() dto: CreateTestDto) {
        return this.testsService.create(dto);
    }

    @Get()
    findAll() {
        return this.testsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.testsService.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.testsService.remove(id);
    }
}
