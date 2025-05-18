import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CareerSwitch} from "../entities/career-switch.entity";
import {CareerSwitchService} from "../services/career-switch.service";
import {CareerSwitchController} from "../controllers/career-switch.controller";

@Module({
    imports: [TypeOrmModule.forFeature([CareerSwitch])],
    providers: [CareerSwitchService],
    controllers: [CareerSwitchController],
    exports: [CareerSwitchService],
})
export class CareerSwitchModule {}
