import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {DiscTest} from "../entities/disc-test.entity";
import {DiscQuestion} from "../entities/disc-question.entity";
import {CreateDiscTestDto} from "../dto/create-disc-test.dto";
import {UpdateDiscTestDto} from "../dto/update-disc-test.dto";
import {CreateDiscQuestionDto} from "../dto/create-disc-question.dto";
import { UpdateDiscQuestionDto } from 'src/dto/update-disc-question.dto';


@Injectable()
export class DiscService {
    constructor(
        @InjectRepository(DiscTest)
        private readonly testRepo: Repository<DiscTest>,

        @InjectRepository(DiscQuestion)
        private readonly questionRepo: Repository<DiscQuestion>,
    ) {}

    // --- DISC Tests CRUD ---

    async findAllTests(): Promise<DiscTest[]> {
        return this.testRepo.find({ relations: ['questions'] });
    }

    async findOneTest(id: number): Promise<DiscTest> {
        const test = await this.testRepo.findOne({ where: { id }, relations: ['questions'] });
        if (!test) throw new NotFoundException(`DISC Test with id=${id} not found`);
        return test;
    }

    async createTest(dto: CreateDiscTestDto): Promise<DiscTest> {
        const test = this.testRepo.create(dto);
        return this.testRepo.save(test);
    }

    async updateTest(id: number, dto: UpdateDiscTestDto): Promise<DiscTest> {
        const test = await this.findOneTest(id);
        Object.assign(test, dto);
        return this.testRepo.save(test);
    }

    async deleteTest(id: number): Promise<void> {
        const result = await this.testRepo.delete(id);
        if (result.affected === 0) throw new NotFoundException(`DISC Test with id=${id} not found`);
    }

    // --- DISC Questions CRUD ---

    async findAllQuestions(testId?: number): Promise<DiscQuestion[]> {
        if (testId) {
            return this.questionRepo.find({ where: { test: { id: testId } }, relations: ['test'] });
        }
        return this.questionRepo.find({ relations: ['test'] });
    }

    async findOneQuestion(id: number): Promise<DiscQuestion> {
        const question = await this.questionRepo.findOne({ where: { id }, relations: ['test'] });
        if (!question) throw new NotFoundException(`DISC Question with id=${id} not found`);
        return question;
    }

    async createQuestion(dto: CreateDiscQuestionDto): Promise<DiscQuestion> {
        const test = await this.findOneTest(dto.testId);
        const question = this.questionRepo.create({
            text: dto.text,
            style: dto.style,
            test,
        });
        return this.questionRepo.save(question);
    }

    async updateQuestion(id: number, dto: UpdateDiscQuestionDto): Promise<DiscQuestion> {
        const question = await this.findOneQuestion(id);
        if (dto.testId) {
            question.test = await this.findOneTest(dto.testId);
        }
        Object.assign(question, dto);
        return this.questionRepo.save(question);
    }

    async deleteQuestion(id: number): Promise<void> {
        const result = await this.questionRepo.delete(id);
        if (result.affected === 0) throw new NotFoundException(`DISC Question with id=${id} not found`);
    }
}
