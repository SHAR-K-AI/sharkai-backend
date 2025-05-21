import { Type } from "class-transformer";
import {IsString, IsOptional, ValidateNested, IsNumber} from "class-validator";

class TranslationDto {
    @IsString()
    level: string;

    @IsString()
    generationStrategy: string;
    @IsOptional()
    @IsString()
    languageCode: string;

    @IsString()
    field: string;

    @IsString()
    value: string;
}

export class CreateProfessionCategoryDto {
    @IsString()
    code: string;

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => TranslationDto)
    translations?: TranslationDto[];
}
