import { SkillTranslationDto } from "./skill-translation.dto";

export class CreateSkillDto {
    category?: string;
    translations?: SkillTranslationDto[];
}