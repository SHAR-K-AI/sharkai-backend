import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {MbtiTest} from "../entities/mbti-test.entity";
import {CreateMbtiTestDto} from "../dto/create-mbti-test.dto";
import {UpdateMbtiTestDto} from "../dto/update-mbti-test.dto";
import {CreateUserMbtiResultDto} from "../dto/create-user-mbti-result.dto";
import {UserMbtiResult} from "../entities/user-mbti-result.entity";
import {User} from "../entities/user.entity";

@Injectable()
export class MbtiTestsService {
    constructor(
        @InjectRepository(UserMbtiResult)
        private resultRepo: Repository<UserMbtiResult>,
        @InjectRepository(User)
        private userRepo: Repository<User>,
        @InjectRepository(MbtiTest)
        private mbtiTestRepo: Repository<MbtiTest>,
    ) {}

    findAll(): Promise<MbtiTest[]> {
        return this.mbtiTestRepo.find({ relations: ['questions'] });
    }

    async findOne(id: string): Promise<MbtiTest> {
        const test = await this.mbtiTestRepo.findOne({
            where: { id },
            relations: ['questions'],
        });
        if (!test) throw new NotFoundException('MBTI Test not found');
        return test;
    }

    create(dto: CreateMbtiTestDto): Promise<MbtiTest> {
        const test = this.mbtiTestRepo.create(dto);
        return this.mbtiTestRepo.save(test);
    }

    async update(id: string, dto: UpdateMbtiTestDto): Promise<MbtiTest> {
        const test = await this.findOne(id);
        Object.assign(test, dto);
        return this.mbtiTestRepo.save(test);
    }

    async remove(id: string): Promise<void> {
        const test = await this.findOne(id);
        await this.mbtiTestRepo.remove(test);
    }

    async saveUserResult(dto: CreateUserMbtiResultDto): Promise<UserMbtiResult> {
        const user = await this.userRepo.findOneByOrFail({ id: Number(dto.userId) });
        const test = await this.mbtiTestRepo.findOneByOrFail({ id: dto.testId });
        console.log(dto)
        const result = this.resultRepo.create({
            user,
            test,
            result: 'user',
            answers: dto.answers,
        });

        return this.resultRepo.save(result);
    }
}
