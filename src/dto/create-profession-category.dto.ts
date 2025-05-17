import { Type } from "class-transformer";
import { IsString, IsOptional, ValidateNested } from "class-validator";

class TranslationDto {
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
