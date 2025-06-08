import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {UserReadPublication} from "../entities/user-read-publication.entity";
import {Publication} from "../entities/publication.entity";
import {User} from "../entities/user.entity";

@Injectable()
export class UserReadPublicationService {
    constructor(
        @InjectRepository(UserReadPublication)
        private readonly repo: Repository<UserReadPublication>,
    ) {}

    async markAsRead(user: User, publication: Publication): Promise<void> {
        await this.repo.save({
            user_id: user.id,
            publication_id: publication.id,
            // read_at: new Date() // опціонально, автоматично створиться
        });
    }

    async hasRead(userId: number, publicationId: number): Promise<boolean> {
        const found = await this.repo.findOne({
            where: { user_id: userId, publication_id: publicationId },
        });
        return !!found;
    }
}
