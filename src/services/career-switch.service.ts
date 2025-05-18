import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {CreateCareerSwitchDto} from "../dto/create-career-switch.dto";
import {CareerSwitch} from "../entities/career-switch.entity";


@Injectable()
export class CareerSwitchService {
    constructor(
        @InjectRepository(CareerSwitch)
        private repo: Repository<CareerSwitch>,
    ) {}

    async create(userId: number, dto: CreateCareerSwitchDto) {
        const data = this.repo.create({
            ...dto,
            existing_skills: JSON.stringify(dto.existing_skills),
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
