import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {RiasecTest} from "../entities/riasec-test.entity";
import {RiasecTestService} from "../services/riasec-test.service";
import {RiasecTestController} from "../controllers/riasec-test.controller";
import {RiasecQuestion} from "../entities/riasec-question.entity";


@Module({
    imports: [TypeOrmModule.forFeature([RiasecTest, RiasecQuestion])],
    providers: [RiasecTestService],
    controllers: [RiasecTestController],
})
export class RiasecModule {}
