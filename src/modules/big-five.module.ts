// src/big-five/big-five.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BigFiveTest } from '../entities/big-five-test.entity';
import { BigFiveQuestion } from '../entities/big-five-question.entity';
import {BigFiveService} from "../services/big-five.service";
import {BigFiveController} from "../controllers/big-five.controller";

@Module({
    imports: [TypeOrmModule.forFeature([BigFiveTest, BigFiveQuestion])],
    providers: [BigFiveService],
    controllers: [BigFiveController],
    exports: [BigFiveService], // Якщо хочеш використовувати сервіс у інших модулях
})
export class BigFiveModule {}
