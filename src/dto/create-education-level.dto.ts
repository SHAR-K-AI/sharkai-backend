import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateEducationLevelTranslationDto } from './create-education-level-translation.dto';

export class CreateEducationLevelDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateEducationLevelTranslationDto)
    translations: CreateEducationLevelTranslationDto[];
}
