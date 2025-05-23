import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {InterestService} from "../services/interest.service";
import {InterestController} from "../controllers/interest.controller";

import {Interest} from "../entities/interest.entity";
import {InterestTranslation} from "../entities/interest-translation.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Interest, InterestTranslation])],
    controllers: [InterestController],
    providers: [InterestService],
})
export class InterestModule {}
