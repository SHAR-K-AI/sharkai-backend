import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {EducationLevel} from "../entities/education-level.entity";

import {EducationLevelService} from "../services/education-level.service";
import {EducationLevelController} from "../services/education-level.controller";
import {EducationLevelTranslation} from "../entities/education-level-translation.entity";

@Module({
    imports: [TypeOrmModule.forFeature([EducationLevel, EducationLevelTranslation])],
    controllers: [EducationLevelController],
    providers: [EducationLevelService],
})

export class EducationLevelModule {}
