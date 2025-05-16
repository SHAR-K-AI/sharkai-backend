import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {AsvabTest} from "../entities/asvab-test.entity";
import {AsvabQuestion} from "../entities/asvab-question.entity";
import {AsvabAnswer} from "../entities/asvab-answer.entity";
import {CreateAsvabTestDto} from "../dto/create-asvab-test.dto";
import {UpdateAsvabTestDto} from "../dto/update-asvab-test.dto";


@Injectable()
export class AsvabService {
    constructor(
        @InjectRepository(AsvabTest)
        private testRepo: Repository<AsvabTest>,
        @InjectRepository(AsvabQuestion)
        private questionRepo: Repository<AsvabQuestion>,
        @InjectRepository(AsvabAnswer)
        private answerRepo: Repository<AsvabAnswer>,
    ) {}

    async create(dto: CreateAsvabTestDto): Promise<AsvabTest> {
        const test = this.testRepo.create({
            title: dto.title,
            description: dto.description,
            questions: dto.questions.map((q) =>
                this.questionRepo.create({
                    text: q.text,
                    category: q.category,
                    answers: q.answers.map((a) => this.answerRepo.create(a)),
                }),
            ),
        });

        return this.testRepo.save(test);
    }

    async findAll(): Promise<AsvabTest[]> {
        return this.testRepo.find({
            relations: {
                questions: {
                    answers: true,
                },
            },
        });
    }

    async findOne(id: string): Promise<AsvabTest> {
        const test = await this.testRepo.findOne({
            where: { id },
            relations: {
                questions: {
                    answers: true,
                },
            },
        });

        if (!test) throw new NotFoundException('ASVAB test not found');
        return test;
    }

    async update(id: string, dto: UpdateAsvabTestDto): Promise<AsvabTest> {
        const existing = await this.findOne(id);

        // Очистити старі питання/відповіді
        await this.testRepo
            .createQueryBuilder()
            .relation(AsvabTest, 'questions')
            .of(id)
            .remove(existing.questions);

        const newQuestions = dto.questions.map((q) =>
            this.questionRepo.create({
                text: q.text,
                category: q.category,
                answers: q.answers.map((a) => this.answerRepo.create(a)),
            }),
        );

        const updated = this.testRepo.merge(existing, {
            ...dto,
            questions: newQuestions,
        });

        return this.testRepo.save(updated);
    }

    async remove(id: string): Promise<void> {
        const test = await this.findOne(id);
        await this.testRepo.remove(test);
    }
}
