import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCareerUpgradeDto } from 'src/dto/create-career-upgrade.dto';
import { Repository } from 'typeorm';
import {CareerUpgrade} from "../entities/career-upgrade.entity";


@Injectable()
export class CareerUpgradeService {
    constructor(
        @InjectRepository(CareerUpgrade)
        private repo: Repository<CareerUpgrade>,
    ) {}

    async create(userId: number, dto: CreateCareerUpgradeDto) {
        const data = this.repo.create({
            ...dto,
            skills_to_improve: JSON.stringify(dto.skills_to_improve),
            courses_taken: dto.courses_taken ? JSON.stringify(dto.courses_taken) : null,
            user_id: userId,
        });
        return this.repo.save(data);
    }

    findAll() {
        return this.repo.find({ relations: ['user'] });
    }

    findOne(id: number) {
        return this.repo.findOne({ where: { id }, relations: ['user'] });
    }

    async remove(id: number) {
        return this.repo.delete(id);
    }
}
