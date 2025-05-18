// skill.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Skill} from "../entities/skill.entity";
import {SkillTranslation} from "../entities/skill-translation.entity";
import {SkillController} from "../controllers/skill.controller";
import {SkillService} from "../services/skill.service";


@Module({
    imports: [TypeOrmModule.forFeature([Skill, SkillTranslation])],
    controllers: [SkillController],
    providers: [SkillService],
})
export class SkillModule {}
