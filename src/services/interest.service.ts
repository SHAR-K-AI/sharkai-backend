import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Interest} from "../entities/interest.entity";
import {CreateInterestDto} from "../dto/create-interest.dto";
import {UpdateInterestDto} from "../dto/update-interest.dto";

@Injectable()
export class InterestService {
    constructor(
        @InjectRepository(Interest)
        private readonly interestRepo: Repository<Interest>,
    ) {}

    findAll(): Promise<Interest[]> {
        return this.interestRepo.find({ relations: ['translations'] });
    }

    async findOne(id: number): Promise<Interest> {
        return this.interestRepo.findOne({
            where: { id },
            relations: ['translations'],
        });
    }

    async create(dto: CreateInterestDto): Promise<Interest> {
        const interest = this.interestRepo.create(dto);
        return this.interestRepo.save(interest);
    }

    async update(id: number, dto: UpdateInterestDto): Promise<Interest> {
        const interest = await this.interestRepo.findOne({ where: { id } });
        if (!interest) throw new NotFoundException('Інтерес не знайдено');

        const updated = this.interestRepo.merge(interest, dto);
        return this.interestRepo.save(updated);
    }

    async remove(id: number): Promise<void> {
        const interest = await this.interestRepo.findOne({ where: { id } });
        if (!interest) throw new NotFoundException('Інтерес не знайдено');
        await this.interestRepo.remove(interest);
    }
}
