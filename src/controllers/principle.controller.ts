import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    ParseIntPipe,
} from '@nestjs/common';

import {Principle} from "../entities/principle.entity";
import {PrincipleService} from "../services/principle.service";
import {CreatePrincipleDto} from "../dto/create-principle.dto";
import {UpdatePrincipleDto} from "../dto/update-principle.dto";

@Controller('principles')
export class PrincipleController {
    constructor(private readonly principleService: PrincipleService) {}

    @Get()
    getAll(): Promise<Principle[]> {
        return this.principleService.findAll();
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number): Promise<Principle> {
        return this.principleService.findOne(id);
    }

    @Post()
    create(@Body() createDto: CreatePrincipleDto): Promise<Principle> {
        return this.principleService.create(createDto);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateDto: UpdatePrincipleDto,
    ): Promise<Principle> {
        return this.principleService.update(id, updateDto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.principleService.remove(id);
    }
}
