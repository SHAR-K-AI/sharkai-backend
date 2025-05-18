import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { CreateProfessionDto } from '../dto/create-profession.dto';
import { Profession } from '../entities/profession.entity';
import {ProfessionTranslation} from "../entities/profession-translation.entity";

@Injectable()
export class ProfessionsService {
    constructor(
        @InjectRepository(Profession)
        private readonly repo: Repository<Profession>,

        @InjectRepository(ProfessionTranslation)
        private readonly translationRepo: Repository<ProfessionTranslation>,
    ) {}

    create(dto: CreateProfessionDto) {
        const entity = this.repo.create(dto);
        return this.repo.save(entity);
    }

    findAll() {
        return this.repo.find({ relations: ['category', 'translations'] });
    }

    findOne(id: number) {
        return this.repo.findOne({ where: { id }, relations: ['category', 'translations'] });
    }

    async update(id: number, dto: CreateProfessionDto): Promise<Profession> {
        const { translations, ...rest } = dto;

        // Оновлюємо основні поля професії (без перекладів)
        await this.repo.update(id, rest);

        if (translations && Array.isArray(translations)) {
            // Видаляємо старі переклади цієї професії
            await this.translationRepo.delete({ profession: { id } });

            const newTranslations = translations.map(t => ({
                ...t,
                profession: { id },
            }));

            await this.translationRepo.save(newTranslations);
        }

        // Повертаємо оновлену професію з перекладами
        return this.findOne(id);
    }


    delete(id: number) {
        return this.repo.delete(id);
    }
}
