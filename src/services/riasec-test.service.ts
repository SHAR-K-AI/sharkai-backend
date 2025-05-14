import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {RiasecTest} from "../entities/riasec-test.entity";
import {CreateRiasecTestDto} from "../dto/create-riasec-test.dto";
import {UpdateRiasecTestDto} from "../dto/update-riasec-test.dto";

@Injectable()
export class RiasecTestService {
    constructor(
        @InjectRepository(RiasecTest)
        private readonly repo: Repository<RiasecTest>,
    ) {}

    create(dto: CreateRiasecTestDto) {
        const test = this.repo.create(dto);
        return this.repo.save(test);
    }

    findAll() {
        return this.repo.find({ relations: ['questions'] });
    }

    findOne(id: number) {
        return this.repo.findOne({
            where: { id },
            relations: ['questions'],
        });
    }

    async update(id: number, dto: UpdateRiasecTestDto) {
        const test = await this.repo.findOneBy({ id });
        if (!test) throw new NotFoundException('Test not found');
        Object.assign(test, dto);
        return this.repo.save(test);
    }

    async remove(id: number) {
        const test = await this.repo.findOneBy({ id });
        if (!test) throw new NotFoundException('Test not found');
        return this.repo.remove(test);
    }
}
