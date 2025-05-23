import { IsString } from 'class-validator';

export class CreateEducationLevelTranslationDto {
    @IsString()
    languageCode: string;

    @IsString()
    field: string;

    @IsString()
    value: string;
}
