import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {PrincipleService} from "../services/principle.service";
import {PrincipleController} from "../controllers/principle.controller";

import {Principle} from "../entities/principle.entity";
import {PrincipleTranslation} from "../entities/principle-translation.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Principle, PrincipleTranslation])],
    providers: [PrincipleService],
    controllers: [PrincipleController],
})

export class PrincipleModule {}
