import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class TranslationDto {
    @IsString()
    languageCode: string;

    @IsString()
    field: string;

    @IsString()
    value: string;
}

export class CreateEnvironmentTypeDto {
    @IsOptional()
    @IsString()
    category?: string;

    @ValidateNested({ each: true })
    @Type(() => TranslationDto)
    translations: TranslationDto[];
}
