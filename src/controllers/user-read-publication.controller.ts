import {
    Controller,
    Post,
    Get,
    Body,
    Param,
    NotFoundException,
    ParseIntPipe,
} from '@nestjs/common';
import {UserReadPublicationService} from "../services/user-read-publication.service";
import {PublicationsService} from "../services/publications.service";
import {UsersService} from "../services/users.service";



@Controller('read')
export class UserReadPublicationController {
    constructor(
        private readonly userReadService: UserReadPublicationService,
        private readonly usersService: UsersService,
        private readonly publicationsService: PublicationsService,
    ) {}

    @Post()
    async markAsRead(
        @Body() body: { userId: number; publicationId: number },
    ) {
        const user = await this.usersService.findOne(body.userId);
        if (!user) {
            throw new NotFoundException(`User with id ${body.userId} not found`);
        }

        const publication = await this.publicationsService.findOne(8);
        console.log(user, "body.userId", publication)

        if (!publication) {
            throw new NotFoundException(`Publication with id ${body.publicationId} not found`);
        }

        await this.userReadService.markAsRead(user, publication);
        return { message: 'Marked as read' };
    }

    @Get(':userId/:publicationId')
    async hasRead(
        @Param('userId', ParseIntPipe) userId: number,
        @Param('publicationId', ParseIntPipe) publicationId: number,
    ) {
        const result = await this.userReadService.hasRead(userId, publicationId);
        return { hasRead: result };
    }
}
