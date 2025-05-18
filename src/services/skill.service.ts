import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import {Skill} from "../entities/skill.entity";
import {SkillTranslation} from "../entities/skill-translation.entity";
import {CreateSkillDto} from "../dto/create-skill.dto";
import {UpdateSkillDto} from "../dto/update-skill.dto";


@Injectable()
export class SkillService {
    constructor(
        @InjectRepository(Skill)
        private readonly skillRepository: Repository<Skill>,
        @InjectRepository(SkillTranslation)
        private readonly translationRepository: Repository<SkillTranslation>,
    ) {}

    async create(createSkillDto: CreateSkillDto): Promise<Skill> {
        const skill = this.skillRepository.create({
            category: createSkillDto.category,
        });
        if (createSkillDto.translations?.length) {
            skill.translations = createSkillDto.translations.map((t) =>
                this.translationRepository.create(t),
            );
        }
        return await this.skillRepository.save(skill);
    }

    async findAll(): Promise<Skill[]> {
        return this.skillRepository.find({ relations: ["translations"] });
    }

    async findOne(id: number): Promise<Skill> {
        const skill = await this.skillRepository.findOne({
            where: { id },
            relations: ["translations"],
        });
        if (!skill) {
            throw new NotFoundException(`Skill with id=${id} not found`);
        }
        return skill;
    }

    async update(id: number, updateSkillDto: UpdateSkillDto): Promise<Skill> {
        const skill = await this.findOne(id);

        if (updateSkillDto.category !== undefined) {
            skill.category = updateSkillDto.category;
        }

        if (updateSkillDto.translations) {
            // Оновлюємо переклади: для простоти видалимо всі і створимо заново
            await this.translationRepository.delete({ skill_id: id });
            skill.translations = updateSkillDto.translations.map((t) =>
                this.translationRepository.create({ ...t, skill_id: id }),
            );
        }

        return this.skillRepository.save(skill);
    }

    async remove(id: number): Promise<void> {
        const skill = await this.findOne(id);
        await this.skillRepository.remove(skill);
    }
}
