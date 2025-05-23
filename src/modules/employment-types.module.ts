import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {EmploymentTypesService} from "../services/employment-types.service";
import {EmploymentTypesController} from "../controllers/employment-types.controller";

import {EmploymentType} from "../entities/employment-type.entity";
import {EmploymentTypeTranslation} from "../entities/employment-type-translation.entity";

@Module({
    imports: [TypeOrmModule.forFeature([EmploymentType, EmploymentTypeTranslation])],
    controllers: [EmploymentTypesController],
    providers: [EmploymentTypesService],
})
export class EmploymentTypesModule {}
