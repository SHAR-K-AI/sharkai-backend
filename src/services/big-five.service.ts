import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {BigFiveTest} from "../entities/big-five-test.entity";
import {BigFiveQuestion} from "../entities/big-five-question.entity";
import {CreateBigFiveDto} from "../dto/create-big-five.dto";
import {UpdateBigFiveDto} from "../dto/update-big-five.dto";


@Injectable()
export class BigFiveService {
    constructor(
        @InjectRepository(BigFiveTest)
        private testRepo: Repository<BigFiveTest>,

        @InjectRepository(BigFiveQuestion)
        private questionRepo: Repository<BigFiveQuestion>,
    ) {}

    async create(dto: CreateBigFiveDto): Promise<BigFiveTest> {
        const test = this.testRepo.create({
            title: dto.title,
            description: dto.description,
            questions: dto.questions.map((q) => this.questionRepo.create(q)),
        });
        return this.testRepo.save(test);
    }

    findAll() {
        return this.testRepo.find({ relations: ['questions'] });
    }

    async findOne(id: string) {
        const test = await this.testRepo.findOne({ where: { id }, relations: ['questions'] });
        if (!test) throw new NotFoundException('Test not found');
        return test;
    }

    async update(id: string, dto: UpdateBigFiveDto) {
        const test = await this.findOne(id);

        test.title = dto.title ?? test.title;
        test.description = dto.description ?? test.description;

        if (dto.questions) {
            await this.questionRepo.delete({ test: { id } }); // видаляємо старі
            test.questions = dto.questions.map((q) => this.questionRepo.create(q));
        }

        return this.testRepo.save(test);
    }

    async remove(id: string) {
        const test = await this.findOne(id);
        return this.testRepo.remove(test);
    }
}
