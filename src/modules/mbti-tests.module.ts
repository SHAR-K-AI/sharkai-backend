import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {MbtiTestsService} from "../services/mbti-tests.service";
import {MbtiTestsController} from "../controllers/mbti-tests.controller";
import {MbtiTest} from "../entities/mbti-test.entity";

@Module({
    imports: [TypeOrmModule.forFeature([MbtiTest])],
    providers: [MbtiTestsService],
    controllers: [MbtiTestsController],
})
export class MbtiTestsModule {}
