import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {Test} from "src/entities/test.entity";
import { TestsService } from "src/services/tests.service";
import { TestAnswer } from 'src/entities/test-answer.entity';
import { TestQuestion } from 'src/entities/test-question.entity';
import { TestsController } from "src/controllers/tests.controller";


@Module({
    imports: [TypeOrmModule.forFeature([Test, TestQuestion, TestAnswer])],
    controllers: [TestsController],
    providers: [TestsService],
})
export class TestsModule {}
