import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {ProfessionCategory} from "../entities/profession-category.entity";
import { ProfessionCategoriesController } from 'src/controllers/profession-categories.controller';
import {ProfessionCategoriesService} from "../services/profession-categories.service";

@Module({
    imports: [TypeOrmModule.forFeature([ProfessionCategory])],
    controllers: [ProfessionCategoriesController],
    providers: [ProfessionCategoriesService],
})
export class ProfessionCategoriesModule {}
