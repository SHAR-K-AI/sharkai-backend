import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {MbtiTest} from "../entities/mbti-test.entity";
import {CreateMbtiTestDto} from "../dto/create-mbti-test.dto";
import {UpdateMbtiTestDto} from "../dto/update-mbti-test.dto";

@Injectable()
export class MbtiTestsService {
    constructor(
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
}
