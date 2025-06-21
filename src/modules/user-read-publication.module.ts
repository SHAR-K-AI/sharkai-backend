import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserReadPublication} from "../entities/user-read-publication.entity";
import {UserReadPublicationService} from "../services/user-read-publication.service";
import {UserReadPublicationController} from "../controllers/user-read-publication.controller";
import {UsersModule} from "./users.module";
import {PublicationsModule} from "./publications.module";

@Module({
    imports: [TypeOrmModule.forFeature([UserReadPublication]), UsersModule, PublicationsModule],
    providers: [UserReadPublicationService],
    controllers: [UserReadPublicationController],
})
export class UserReadPublicationModule {}
