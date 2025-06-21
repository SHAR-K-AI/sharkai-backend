import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {LearningPathDay} from '../entities/learning-path-day.entity';
import {Publication} from '../entities/publication.entity';

@Injectable()
export class LearningPathDaysService {
    constructor(
        @InjectRepository(LearningPathDay)
        private readonly learningPathDaysRepository: Repository<LearningPathDay>,
        @InjectRepository(Publication)
        private readonly publicationsRepository: Repository<Publication>,
    ) {
    }

    async findAll(): Promise<LearningPathDay[]> {
        return this.learningPathDaysRepository.find({relations: ['publication', 'test', 'achievement', 'translations']});
    }

    async findOne(id: string): Promise<LearningPathDay> {
        const day = await this.learningPathDaysRepository.findOne({
            where: {id},
            relations: ['publication', 'test', 'achievement', 'translations', 'publication.translations'],
        });

        if (!day) {
            throw new NotFoundException(`Learning path day with id ${id} not found`);
        }

        return day;
    }

    async getPublicationIdForDay(dayId: string): Promise<LearningPathDay> {
        return this.learningPathDaysRepository.findOne({
            where: { id: dayId },
            relations: ['publication'],
        });
    }

    async update(id: string, updateData: Partial<LearningPathDay>): Promise<LearningPathDay> {
        const day = await this.findOne(id);
        const updated = Object.assign(day, updateData);
        return this.learningPathDaysRepository.save(updated);
    }

    async assignPublicationToDay(dayId: string, publicationId: string): Promise<LearningPathDay> {
        console.log(publicationId, "publicationIdpublicationId")
        const day = await this.findOne(dayId);
        const publication = await this.publicationsRepository.findOne({ where: { id: Number(publicationId) } });

        if (!publication) {
            throw new NotFoundException(`Publication with id ${publicationId} not found`);
        }

        day.publication = publication;
        return this.learningPathDaysRepository.save(day);
    }

    async remove(id: string): Promise<void> {
        const day = await this.findOne(id);
        await this.learningPathDaysRepository.remove(day);
    }
}
