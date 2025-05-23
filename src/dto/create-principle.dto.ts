import { IsOptional, IsString, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';

export class PrincipleTranslationDto {
    @IsString()
    language_code: string;

    @IsString()
    field: string;

    @IsString()
    value: string;
}

export class CreatePrincipleDto {
    @IsOptional()
    @IsString()
    category?: string;

    @ValidateNested({ each: true })
    @Type(() => PrincipleTranslationDto)
    @ArrayMinSize(1)
    translations: PrincipleTranslationDto[];
}
