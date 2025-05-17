import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import {ProfessionCategory} from "../entities/profession-category.entity";
import {ProfessionCategoryTranslation} from "../entities/profession-category-translation.entity";
import {ProfessionCategoriesService} from "../services/profession-categories.service";
import {ProfessionCategoriesController} from "../controllers/profession-categories.controller";

@Module({
    imports: [TypeOrmModule.forFeature([ProfessionCategory, ProfessionCategoryTranslation])],
    providers: [ProfessionCategoriesService],
    controllers: [ProfessionCategoriesController],
    exports: [ProfessionCategoriesService],
})
export class ProfessionCategoriesModule {}
