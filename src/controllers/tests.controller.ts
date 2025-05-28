import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import {CreateTestDto} from "../dto/create-test.dto";
import {TestsService} from "../services/tests.service";

@Controller('tests')
export class TestsController {
    constructor(private readonly testsService: TestsService) {}

    @Post()
    create(@Body() createTestDto: CreateTestDto) {
        return this.testsService.create(createTestDto);
    }

    @Get()
    findAll() {
        return this.testsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.testsService.findOne(+id);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.testsService.remove(+id);
    }
}
