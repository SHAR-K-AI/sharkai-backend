import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {ProfessionCategory} from "../entities/profession-category.entity";
import {CreateProfessionCategoryDto} from "../dto/create-profession-category.dto";
import {UpdateProfessionCategoryDto} from "../dto/update-profession-category.dto";

@Injectable()
export class ProfessionCategoriesService {
    constructor(
        @InjectRepository(ProfessionCategory)
        private readonly repo: Repository<ProfessionCategory>,
    ) {}

    create(dto: CreateProfessionCategoryDto) {
        const category = this.repo.create(dto);
        return this.repo.save(category);
    }

    findAll() {
        return this.repo.find();
    }

    async findOne(id: number) {
        const category = await this.repo.findOne({ where: { id } });
        if (!category) {
            throw new NotFoundException(`Category with ID ${id} not found`);
        }
        return category;
    }

    async update(id: number, dto: UpdateProfessionCategoryDto) {
        const category = await this.findOne(id);
        const updated = Object.assign(category, dto);
        return this.repo.save(updated);
    }

    async remove(id: number) {
        const category = await this.findOne(id);
        return this.repo.remove(category);
    }
}
