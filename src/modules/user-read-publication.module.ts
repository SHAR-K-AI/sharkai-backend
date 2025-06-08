import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {UserReadPublication} from "../entities/user-read-publication.entity";
import {UserReadPublicationService} from "../services/user-read-publication.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserReadPublication])],
    providers: [UserReadPublicationService],
    exports: [UserReadPublicationService],
})
export class UserReadPublicationModule {}
