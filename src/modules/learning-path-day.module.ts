import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LearningPathDay } from '../entities/learning-path-day.entity';
import { Publication } from '../entities/publication.entity';
import {LearningPathDaysService} from "../services/learning-path-days.service";
import {LearningPathDaysController} from "../controllers/learning-path-days.controller";


@Module({
    imports: [TypeOrmModule.forFeature([LearningPathDay, Publication])],
    controllers: [LearningPathDaysController],
    providers: [LearningPathDaysService],
})
export class LearningPathDaysModule {}
