import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProfessionsService } from '../services/professions.service';
import {ProfessionsController} from "../controllers/professions.controller";

import { Profession } from '../entities/profession.entity';
import { ProfessionTranslation } from '../entities/profession-translation.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Profession, ProfessionTranslation])],
    providers: [ProfessionsService],
    controllers: [ProfessionsController],
    exports: [ProfessionsService],
})
export class ProfessionsModule {}
