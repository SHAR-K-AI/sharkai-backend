import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    ParseIntPipe,
} from "@nestjs/common";

import {ProfessionCategoriesService} from "../services/profession-categories.service";
import {CreateProfessionCategoryDto} from "../dto/create-profession-category.dto";

@Controller("profession-categories")
export class ProfessionCategoriesController {
    constructor(private readonly service: ProfessionCategoriesService) {}

    @Post()
    create(@Body() dto: CreateProfessionCategoryDto) {
        console.log(dto);
        return this.service.create(dto);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(":id")
    findOne(@Param("id", ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Put(":id")
    update(
        @Param("id", ParseIntPipe) id: number,
        @Body() dto: Partial<CreateProfessionCategoryDto>
    ) {
        return this.service.update(id, dto);
    }

    @Delete(":id")
    delete(@Param("id", ParseIntPipe) id: number) {
        return this.service.delete(id);
    }
}
