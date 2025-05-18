import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {CareerUpgrade} from "../entities/career-upgrade.entity";
import {CareerUpgradeService} from "../services/career-upgrade.service";
import {CareerUpgradeController} from "../controllers/career-upgrade.controller";


@Module({
    imports: [TypeOrmModule.forFeature([CareerUpgrade])],
    providers: [CareerUpgradeService],
    controllers: [CareerUpgradeController],
    exports: [CareerUpgradeService],
})
export class CareerUpgradeModule {}
