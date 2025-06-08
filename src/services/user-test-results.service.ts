import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

// import { UserDiscResult } from '@/disc-results/entities/user-disc-result.entity';
// import { UserGallupResult } from '@/gallup-results/entities/user-gallup-result.entity';
// import { UserBigFiveResult } from '@/big-five-results/entities/user-big-five-result.entity';
// import { UserAsvabResult } from '@/asvab-results/entities/user-asvab-result.entity';
import {UserMbtiResult} from "../entities/user-mbti-result.entity";
import {User} from "../entities/user.entity";

@Injectable()
export class UserTestResultsService {
    constructor(
        @InjectRepository(UserMbtiResult)
        private mbtiRepo: Repository<UserMbtiResult>,
        // @InjectRepository(UserDiscResult)
        // private discRepo: Repository<UserDiscResult>,
        //
        // @InjectRepository(UserGallupResult)
        // private gallupRepo: Repository<UserGallupResult>,
        //
        // @InjectRepository(UserBigFiveResult)
        // private bigFiveRepo: Repository<UserBigFiveResult>,
        //
        // @InjectRepository(UserAsvabResult)
        // private asvabRepo: Repository<UserAsvabResult>,
    ) {
    }

    async getAllResultsForUser(user: User) {
        const [mbti, /*disc, gallup, bigFive, asvab*/] = await Promise.all([
            this.mbtiRepo.find({
                where: {user: {id: user.id}},
                relations: ['test'],
                order: {createdAt: 'DESC'}
            }),
            // this.discRepo.find({ where: { user }, relations: ['test'], order: { createdAt: 'DESC' } }),
            // this.gallupRepo.find({ where: { user }, relations: ['test'], order: { createdAt: 'DESC' } }),
            // this.bigFiveRepo.find({ where: { user }, relations: ['test'], order: { createdAt: 'DESC' } }),
            // this.asvabRepo.find({ where: { user }, relations: ['test'], order: { createdAt: 'DESC' } }),
        ]);

        console.log(mbti, user, "mbtimbtimbtimbti")

        return {
            mbti,
            // disc,,
            // gallup,
            // bigFive,
            // asvab,
        };
    }
}
