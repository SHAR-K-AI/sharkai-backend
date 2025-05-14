import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';
import {RiasecTestService} from "../services/riasec-test.service";
import {CreateRiasecTestDto} from "../dto/create-riasec-test.dto";
import {UpdateRiasecTestDto} from "../dto/update-riasec-test.dto";


@Controller('riasec-tests')
export class RiasecTestController {
    constructor(private readonly service: RiasecTestService) {}

    @Post()
    create(@Body() dto: CreateRiasecTestDto) {
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
    update(@Param('id') id: string, @Body() dto: UpdateRiasecTestDto) {
        return this.service.update(+id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.service.remove(+id);
    }
}
