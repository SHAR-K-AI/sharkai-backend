import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LearningPath } from '../entities/learning-path.entity';
import {CreateLearningPathDto} from "../dto/create-learning-path.dto";
import {UpdateLearningPathDto} from "../dto/update-learning-path.dto";

@Injectable()
export class LearningPathService {
    constructor(
        @InjectRepository(LearningPath)
        private readonly learningPathRepo: Repository<LearningPath>,
    ) {}

    async create(dto: CreateLearningPathDto) {
        const path = this.learningPathRepo.create(dto);
        return this.learningPathRepo.save(path);
    }

    findAll() {
        return this.learningPathRepo.find({ relations: ['days', 'days.achievement'] });
    }

    async findOne(id: string) {
        const path = await this.learningPathRepo.findOne({
            where: { id },
            relations: ['days', 'days.achievement'],
        });
        if (!path) throw new NotFoundException('Learning path not found');
        return path;
    }

    async update(id: string, dto: UpdateLearningPathDto) {
        await this.learningPathRepo.update(id, dto);
        return this.findOne(id);
    }

    async remove(id: string) {
        await this.learningPathRepo.delete(id);
        return { deleted: true };
    }
}
