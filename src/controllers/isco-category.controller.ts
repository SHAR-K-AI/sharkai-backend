import {Body, Controller, Delete, Get, Param, Patch, Post} from "@nestjs/common";
import {IscoCategory} from "../entities/isco-category.entity";
import {IscoCategoryService} from "../services/isco-category.service";

@Controller('isco-categories')
export class IscoCategoryController {
    constructor(private readonly professionService: IscoCategoryService) {}

    @Post()
    create(@Body() data: Partial<IscoCategory>) {
        return this.professionService.create(data);
    }

    @Get()
    findAll() {
        return this.professionService.findAll();
    }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return this.professionService.findOne(id);
    // }
    //
    // @Patch(':id')
    // update(@Param('id') id: string, @Body() data: Partial<IscoCategory>) {
    //     return this.professionService.update(id, data);
    // }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.professionService.remove(id);
    }
}
