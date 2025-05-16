import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {GallupTest} from "../entities/gallup-test.entity";
import {CreateGallupTestDto} from "../dto/create-gallup-test.dto";
import {UpdateGallupTestDto} from "../dto/update-gallup-test.dto";


@Injectable()
export class GallupService {
    constructor(
        @InjectRepository(GallupTest)
        private readonly testRepo: Repository<GallupTest>,
    ) {}

    async create(dto: CreateGallupTestDto) {
        const test = this.testRepo.create(dto);
        return await this.testRepo.save(test);
    }

    findAll() {
        return this.testRepo.find({ relations: ['questions'] });
    }

    async findOne(id: number) {
        const test = await this.testRepo.findOne({ where: { id }, relations: ['questions'] });
        if (!test) throw new NotFoundException('Test not found');
        return test;
    }

    async update(id: number, dto: UpdateGallupTestDto) {
        const test = await this.testRepo.preload({ id, ...dto });
        if (!test) throw new NotFoundException('Test not found');
        return this.testRepo.save(test);
    }

    async remove(id: number) {
        const test = await this.findOne(id);
        return this.testRepo.remove(test);
    }
}
