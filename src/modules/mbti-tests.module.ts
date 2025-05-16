import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {MbtiTestsService} from "../services/mbti-tests.service";
import {MbtiTestsController} from "../controllers/mbti-tests.controller";
import {MbtiTest} from "../entities/mbti-test.entity";
import {UserMbtiResult} from "../entities/user-mbti-result.entity";
import {User} from "../entities/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([UserMbtiResult, User, MbtiTest])],
    providers: [MbtiTestsService],
    controllers: [MbtiTestsController],
})
export class MbtiTestsModule {}
