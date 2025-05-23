import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {EducationLevel} from "../entities/education-level.entity";
import {CreateEducationLevelDto} from "../dto/create-education-level.dto";
import {UpdateEducationLevelDto} from "../dto/update-education-level.dto";


@Injectable()
export class EducationLevelService {
    constructor(
        @InjectRepository(EducationLevel)
        private educationLevelRepo: Repository<EducationLevel>,
    ) {}

    create(dto: CreateEducationLevelDto) {
        const level = this.educationLevelRepo.create(dto);
        return this.educationLevelRepo.save(level);
    }

    findAll() {
        return this.educationLevelRepo.find({ relations: ['translations'] });
    }

    async findOne(id: number) {
        const level = await this.educationLevelRepo.findOne({
            where: { id },
            relations: ['translations'],
        });
        if (!level) throw new NotFoundException('Education level not found');
        return level;
    }

    async update(id: number, dto: UpdateEducationLevelDto) {
        const level = await this.findOne(id);
        Object.assign(level, dto);
        return this.educationLevelRepo.save(level);
    }

    async remove(id: number) {
        const level = await this.findOne(id);
        return this.educationLevelRepo.remove(level);
    }
}
