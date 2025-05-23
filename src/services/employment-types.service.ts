import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

import {EmploymentType} from "../entities/employment-type.entity";
import {CreateEmploymentTypeDto} from "../dto/create-employment-type.dto";
import {UpdateEmploymentTypeDto} from "../dto/update-employment-type.dto";

@Injectable()
export class EmploymentTypesService {
    constructor(
        @InjectRepository(EmploymentType)
        private employmentTypeRepo: Repository<EmploymentType>,
    ) {}

    findAll() {
        return this.employmentTypeRepo.find({ relations: ['translations'] });
    }

    async findOne(id: number) {
        const type = await this.employmentTypeRepo.findOne({ where: { id }, relations: ['translations'] });
        if (!type) throw new NotFoundException('Employment type not found');
        return type;
    }

    create(dto: CreateEmploymentTypeDto) {
        const type = this.employmentTypeRepo.create(dto);
        return this.employmentTypeRepo.save(type);
    }

    async update(id: number, dto: UpdateEmploymentTypeDto) {
        const type = await this.findOne(id);
        Object.assign(type, dto);
        return this.employmentTypeRepo.save(type);
    }

    async remove(id: number) {
        const type = await this.findOne(id);
        return this.employmentTypeRepo.remove(type);
    }
}
