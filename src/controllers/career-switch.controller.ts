import { Controller, Post, Get, Delete, Param, Body, Req, ParseIntPipe } from '@nestjs/common';
import {CareerSwitchService} from "../services/career-switch.service";
import {CreateCareerSwitchDto} from "../dto/create-career-switch.dto";


@Controller('career-switch')
export class CareerSwitchController {
    constructor(private readonly service: CareerSwitchService) {}

    @Post()
    create(@Req() req, @Body() dto: CreateCareerSwitchDto) {
        const userId = req.user.id;
        return this.service.create(userId, dto);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.service.remove(id);
    }
}
