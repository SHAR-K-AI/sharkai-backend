import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {AsvabTest} from "../entities/asvab-test.entity";
import {AsvabQuestion} from "../entities/asvab-question.entity";
import {AsvabAnswer} from "../entities/asvab-answer.entity";
import {AsvabController} from "../controllers/asvab.controller";
import {AsvabService} from "../services/asvab.service";

@Module({
    imports: [TypeOrmModule.forFeature([AsvabTest, AsvabQuestion, AsvabAnswer])],
    controllers: [AsvabController],
    providers: [AsvabService],
})
export class AsvabModule {}
