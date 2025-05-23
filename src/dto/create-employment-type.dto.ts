import { IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class EmploymentTypeTranslationDto {
    @IsString()
    language_code: string;

    @IsString()
    field: string;

    @IsString()
    value: string;
}

export class CreateEmploymentTypeDto {
    @IsOptional()
    @IsString()
    category?: string;

    @ValidateNested({ each: true })
    @Type(() => EmploymentTypeTranslationDto)
    translations: EmploymentTypeTranslationDto[];
}
