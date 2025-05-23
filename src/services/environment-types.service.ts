import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {EnvironmentType} from "../entities/environment-type.entity";
import {CreateEnvironmentTypeDto} from "../dto/create-environment-type.dto";
import {UpdateEnvironmentTypeDto} from "../dto/update-environment-type.dto";


@Injectable()
export class EnvironmentTypesService {
    constructor(
        @InjectRepository(EnvironmentType)
        private envRepo: Repository<EnvironmentType>,
    ) {}

    create(dto: CreateEnvironmentTypeDto) {
        const envType = this.envRepo.create(dto);
        return this.envRepo.save(envType);
    }

    findAll() {
        return this.envRepo.find({ relations: ['translations'] });
    }

    findOne(id: number) {
        return this.envRepo.findOne({ where: { id }, relations: ['translations'] });
    }

    async update(id: number, dto: UpdateEnvironmentTypeDto) {
        const env = await this.envRepo.findOne({ where: { id }, relations: ['translations'] });
        if (!env) return null;

        Object.assign(env, dto);
        return this.envRepo.save(env);
    }

    async remove(id: number) {
        const env = await this.envRepo.findOne({ where: { id } });
        if (!env) return null;
        return this.envRepo.remove(env);
    }
}
