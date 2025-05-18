import { Controller, Post, Get, Delete, Param, Body, Req, ParseIntPipe } from '@nestjs/common';
import {CareerUpgradeService} from "../services/career-upgrade.service";
import {CreateCareerUpgradeDto} from "../dto/create-career-upgrade.dto";


@Controller('career-upgrade')
export class CareerUpgradeController {
    constructor(private readonly service: CareerUpgradeService) {}

    @Post()
    create(@Req() req, @Body() dto: CreateCareerUpgradeDto) {
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
