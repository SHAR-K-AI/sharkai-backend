import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import {Publication} from "../entities/publication.entity";
import {PublicationsService} from "../services/publications.service";
import {PublicationsController} from "../controllers/publications.controller";
import {PublicationTranslation} from "../entities/publication-translation.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Publication, PublicationTranslation])],
    controllers: [PublicationsController],
    providers: [PublicationsService],
})
export class PublicationsModule {}
