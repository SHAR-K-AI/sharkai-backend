import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LearningPath } from '../entities/learning-path.entity';
import {LearningPathController} from "../controllers/learning-path.controller";
import {LearningPathService} from "../services/learning-path.service";

@Module({
    imports: [TypeOrmModule.forFeature([LearningPath])],
    controllers: [LearningPathController],
    providers: [LearningPathService],
})
export class LearningPathModule {}
