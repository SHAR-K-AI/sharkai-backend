import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProfessionsService } from '../services/professions.service';
import { CreateProfessionDto } from '../dto/create-profession.dto';

@Controller('professions')
export class ProfessionsController {
    constructor(private readonly professionsService: ProfessionsService) {}

    @Get()
    findAll() {
        return this.professionsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.professionsService.findOne(Number(id));
    }

    @Post()
    create(@Body() data: CreateProfessionDto) {
        return this.professionsService.create(data);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() data: Partial<CreateProfessionDto>) {
        return this.professionsService.update(Number(id), data);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.professionsService.delete(Number(id));
    }
}
