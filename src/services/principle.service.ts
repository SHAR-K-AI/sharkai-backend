import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Principle} from "../entities/principle.entity";
import {CreatePrincipleDto} from "../dto/create-principle.dto";
import {UpdatePrincipleDto} from "../dto/update-principle.dto";

@Injectable()
export class PrincipleService {
    constructor(
        @InjectRepository(Principle)
        private principleRepository: Repository<Principle>,
    ) {}

    async findAll(): Promise<Principle[]> {
        return this.principleRepository.find({ relations: ['translations'] });
    }

    async findOne(id: number): Promise<Principle> {
        const principle = await this.principleRepository.findOne({
            where: { id },
            relations: ['translations'],
        });
        if (!principle) {
            throw new NotFoundException(`Principle with id ${id} not found`);
        }
        return principle;
    }

    async create(createDto: CreatePrincipleDto): Promise<Principle> {
        const principle = this.principleRepository.create(createDto);
        return this.principleRepository.save(principle);
    }

    async update(id: number, updateDto: UpdatePrincipleDto): Promise<Principle> {
        const principle = await this.findOne(id);
        Object.assign(principle, updateDto);
        return this.principleRepository.save(principle);
    }

    async remove(id: number): Promise<void> {
        const principle = await this.findOne(id);
        await this.principleRepository.remove(principle);
    }
}
