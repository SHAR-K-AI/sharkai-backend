import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {GallupTest} from "../entities/gallup-test.entity";
import {GallupQuestion} from "../entities/gallup-question.entity";
import {GallupController} from "../controllers/gallup.controller";
import {GallupService} from "../services/gallup-test.service";

@Module({
    imports: [TypeOrmModule.forFeature([GallupTest, GallupQuestion])],
    controllers: [GallupController],
    providers: [GallupService],
})
export class GallupModule {}
