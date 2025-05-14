// src/riasec/riasec-question.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {RiasecQuestion} from "../entities/riasec-question.entity";
import {CreateRiasecQuestionDto} from "../dto/create-riasec-question.dto";
import {UpdateRiasecQuestionDto} from "../dto/update-riasec-question.dto";


@Injectable()
export class RiasecQuestionService {
    constructor(
        @InjectRepository(RiasecQuestion)
        private readonly repo: Repository<RiasecQuestion>,
    ) {}

    create(dto: CreateRiasecQuestionDto) {
        const question = this.repo.create(dto);
        return this.repo.save(question);
    }

    findAll() {
        return this.repo.find({ where: { isActive: true }, relations: ['test'] });
    }

    findOne(id: number) {
        return this.repo.findOne({
            where: { id },
            relations: ['test'],
        });
    }

    async update(id: number, dto: UpdateRiasecQuestionDto) {
        const question = await this.repo.findOneBy({ id });
        if (!question) throw new NotFoundException('Question not found');
        Object.assign(question, dto);
        return this.repo.save(question);
    }

    async remove(id: number) {
        const question = await this.repo.findOneBy({ id });
        if (!question) throw new NotFoundException('Question not found');
        return this.repo.remove(question);
    }
}
