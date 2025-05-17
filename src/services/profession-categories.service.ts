import { Repository } from "typeorm";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateProfessionCategoryDto } from "../dto/create-profession-category.dto";

import { ProfessionCategory } from "../entities/profession-category.entity";
import { ProfessionCategoryTranslation } from "../entities/profession-category-translation.entity";

@Injectable()
export class ProfessionCategoriesService {
    constructor(
        @InjectRepository(ProfessionCategory)
        private repo: Repository<ProfessionCategory>,

        @InjectRepository(ProfessionCategoryTranslation)
        private translationRepo: Repository<ProfessionCategoryTranslation>,
    ) {}

    create(dto: CreateProfessionCategoryDto) {
        const entity = this.repo.create(dto);
        return this.repo.save(entity);
    }

    findAll() {
        return this.repo.find({ relations: ["translations"] });
    }

    findOne(id: number) {
        return this.repo.findOne({ where: { id }, relations: ["translations"] });
    }

    async update(id: number, dto: Partial<CreateProfessionCategoryDto>) {
        const { translations, ...categoryData } = dto;

        await this.repo.update(id, categoryData);

        if (translations) {
            await this.translationRepo.delete({ category_id: id });

            const newTranslations = translations.map(t =>
                this.translationRepo.create({
                    languageCode: t.languageCode,
                    field: t.field,
                    value: t.value,
                    category_id: id,
                }),
            );

            await this.translationRepo.save(newTranslations);
        }

        return this.findOne(id);
    }

    delete(id: number) {
        return this.repo.delete(id);
    }
}
