import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {UserMbtiResult} from "../entities/user-mbti-result.entity";
import {UserTestResultsService} from "../services/user-test-results.service";
import {UserTestResultsController} from "../controllers/user-test-results.controller";


@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserMbtiResult,
            // UserDiscResult,
            // UserGallupResult,
            // UserBigFiveResult,
            // UserAsvabResult,
        ]),
    ],
    controllers: [UserTestResultsController],
    providers: [UserTestResultsService],
})
export class UserTestResultsModule {}
