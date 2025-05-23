import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {EnvironmentTypesService} from "../services/environment-types.service";
import {EnvironmentTypesController} from "../controllers/environment-types.controller";

import {EnvironmentType} from "../entities/environment-type.entity";
import {EnvironmentTypeTranslation} from "../entities/environment-type-translation.entity";

@Module({
    imports: [TypeOrmModule.forFeature([EnvironmentType, EnvironmentTypeTranslation])],
    controllers: [EnvironmentTypesController],
    providers: [EnvironmentTypesService],
})
export class EnvironmentTypesModule {}
