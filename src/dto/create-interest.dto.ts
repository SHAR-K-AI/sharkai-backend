import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class InterestTranslationDto {
    @IsString()
    language_code: string;

    @IsString()
    field: string;

    @IsString()
    value: string;
}

export class CreateInterestDto {
    @IsOptional()
    @IsString()
    category?: string;

    @ValidateNested({ each: true })
    @Type(() => InterestTranslationDto)
    translations: InterestTranslationDto[];
}
