import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import {BigFiveService} from "../services/big-five.service";
import {CreateBigFiveDto} from "../dto/create-big-five.dto";
import {UpdateBigFiveDto} from "../dto/update-big-five.dto";


@Controller('big-five')
export class BigFiveController {
    constructor(private readonly bigFiveService: BigFiveService) {}

    @Post()
    create(@Body() dto: CreateBigFiveDto) {
        return this.bigFiveService.create(dto);
    }

    @Get()
    findAll() {
        return this.bigFiveService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.bigFiveService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateBigFiveDto) {
        return this.bigFiveService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.bigFiveService.remove(id);
    }
}
