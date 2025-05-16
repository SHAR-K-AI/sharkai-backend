import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { v4 as uuidv4 } from 'uuid';
import {CreateMbtiQuestionDto} from "../dto/create-mbti-question.dto";
import { MbtiQuestion } from 'src/entities/mbti-question.entity';
import {UpdateMbtiQuestionDto} from "../dto/update-mbti-question.dto";

@Injectable()
export class MbtiQuestionsService {
    constructor(
        @InjectRepository(MbtiQuestion)
        private readonly mbtiQuestionRepo: Repository<MbtiQuestion>,
    ) {}

    async create(createDto: CreateMbtiQuestionDto): Promise<MbtiQuestion> {
        const question = this.mbtiQuestionRepo.create({
            id: uuidv4(),
            ...createDto,
        });
        return this.mbtiQuestionRepo.save(question);
    }

    async findAll(test_id?: string): Promise<MbtiQuestion[]> {
        if (test_id) {
            return this.mbtiQuestionRepo.find({ where: { test_id } });
        }
        return this.mbtiQuestionRepo.find();
    }

    async findOne(id: string): Promise<MbtiQuestion> {
        const question = await this.mbtiQuestionRepo.findOne({ where: { id } });
        if (!question) throw new NotFoundException(`Question with id ${id} not found`);
        return question;
    }

    async update(id: string, updateDto: UpdateMbtiQuestionDto): Promise<MbtiQuestion> {
        const question = await this.findOne(id);
        Object.assign(question, updateDto);
        return this.mbtiQuestionRepo.save(question);
    }

    async remove(id: string): Promise<void> {
        const result = await this.mbtiQuestionRepo.delete(id);
        if (result.affected === 0) throw new NotFoundException(`Question with id ${id} not found`);
    }
}
