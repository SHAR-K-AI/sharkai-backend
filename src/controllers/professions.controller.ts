import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import { Profession } from "../entities/profession.entity";
import {ProfessionService} from "../services/professions.service";

@Controller('professions')
export class ProfessionController {
    constructor(private readonly professionService: ProfessionService) {}

    @Post()
    create(@Body() data: Partial<Profession>) {
        return this.professionService.create(data);
    }

    @Get()
    findAll() {
        return this.professionService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.professionService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() data: Partial<Profession>) {
        return this.professionService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.professionService.remove(id);
    }
}
