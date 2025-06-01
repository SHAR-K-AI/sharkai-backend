import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {Publication} from "../entities/publication.entity";
import {CreatePublicationDto} from "../dto/create-publication.dto";
import {UpdatePublicationDto} from "../dto/update-publication.dto";


@Injectable()
export class PublicationsService {
    constructor(
        @InjectRepository(Publication)
        private readonly repo: Repository<Publication>,
    ) {}

    async findBySlug(slug: string) {
        const publication = await this.repo.findOne({
            where: { slug },
            relations: ['translations'], // якщо потрібні зв'язки
        });
        if (!publication) throw new NotFoundException('Publication not found');
        return publication;
    }

    create(dto: CreatePublicationDto) {
        const publication = this.repo.create({
            slug: dto.slug,
            profession_code: dto.professionCode,
            translations: dto.translations.map(t => ({
                languageCode: t.languageCode,
                field: t.field,
                value: t.value,
            })),
        });

        return this.repo.save(publication);
    }

    findAll() {
        return this.repo.find({ relations: ['translations'] });
    }

    async findOne(id: number) {
        const publication = await this.repo.findOne({
            where: { id },
            relations: ['translations', 'profession'],
        });
        if (!publication) throw new NotFoundException('Publication not found');
        return publication;
    }

    async update(id: number, dto: UpdatePublicationDto) {
        await this.repo.update(id, dto);
        return this.findOne(id);
    }

    async remove(id: number) {
        const result = await this.repo.delete(id);
        if (!result.affected) throw new NotFoundException('Publication not found');
    }
}
