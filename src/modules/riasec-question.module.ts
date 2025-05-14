// src/riasec/riasec-question.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {RiasecQuestion} from "../entities/riasec-question.entity";
import {RiasecTest} from "../entities/riasec-test.entity";
import {RiasecQuestionService} from "../services/riasec-question.service";
import {RiasecQuestionController} from "../controllers/riasec-question.controller";

@Module({
    imports: [TypeOrmModule.forFeature([RiasecQuestion, RiasecTest])],
    providers: [RiasecQuestionService],
    controllers: [RiasecQuestionController],
})
export class RiasecQuestionModule {}
