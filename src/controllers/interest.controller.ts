import {
    Controller, Get, Post, Put, Delete, Param, Body, NotFoundException,
} from '@nestjs/common';
import { Interest } from 'src/entities/interest.entity';
import {InterestService} from "../services/interest.service";
import {CreateInterestDto} from "../dto/create-interest.dto";
import {UpdateInterestDto} from "../dto/update-interest.dto";

@Controller('interests')
export class InterestController {
    constructor(private readonly interestService: InterestService) {}

    @Get()
    findAll(): Promise<Interest[]> {
        return this.interestService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Interest> {
        const interest = await this.interestService.findOne(id);
        if (!interest) throw new NotFoundException('Інтерес не знайдено');
        return interest;
    }

    @Post()
    create(@Body() dto: CreateInterestDto): Promise<Interest> {
        return this.interestService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: UpdateInterestDto): Promise<Interest> {
        return this.interestService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: number): Promise<void> {
        return this.interestService.remove(id);
    }
}
