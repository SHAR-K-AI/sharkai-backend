import { Controller, Post, Get, Body, Param } from '@nestjs/common';

import {User} from "../entities/user.entity";
import {Publication} from "../entities/publication.entity";
import {UserReadPublicationService} from "../services/user-read-publication.service";

@Controller('read')
export class UserReadPublicationController {
    constructor(
        private readonly userReadService: UserReadPublicationService,
    ) {}

    @Post()
    async markAsRead(
        @Body() body: { userId: number; publicationId: number },
    ) {
        const user = new User();
        user.id = body.userId;

        const publication = new Publication();
        publication.id = body.publicationId;

        await this.userReadService.markAsRead(user, publication);
        return { message: 'Marked as read' };
    }

    @Get(':userId/:publicationId')
    async hasRead(
        @Param('userId') userId: number,
        @Param('publicationId') publicationId: number,
    ) {
        const result = await this.userReadService.hasRead(userId, publicationId);
        return { hasRead: result };
    }
}
