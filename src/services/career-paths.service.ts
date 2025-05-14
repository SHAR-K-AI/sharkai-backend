// services/career-paths.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CareerPath } from '../entities/career-path.entity';
import { CreateCareerPathDto } from '../dto/create-career-path.dto';

@Injectable()
export class CareerPathsService {
    constructor(
        @InjectRepository(CareerPath)
        private repo: Repository<CareerPath>,
    ) {}

    async create(dto: CreateCareerPathDto): Promise<CareerPath> {
        const path = this.repo.create(dto);
        return this.repo.save(path);
    }

    findAll() {
        return this.repo.find({ relations: ['steps'] });
    }

    findOne(id: number) {
        return this.repo.findOne({ where: { path_id: id }, relations: ['steps'] });
    }

    async remove(id: number) {
        await this.repo.delete(id);
    }

    async update(id: number, dto: CreateCareerPathDto) {
        await this.repo.update(id, dto);
        return this.findOne(id);
    }
}
