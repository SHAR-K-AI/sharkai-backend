import {
    IsString,
    IsNotEmpty,
    IsOptional,
    IsArray,
    ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class TranslationDto {
    @IsString()
    languageCode: string;

    @IsString()
    field: string;

    @IsString()
    value: string;
}

export class CreatePublicationDto {
    @IsString()
    @IsNotEmpty()
    slug: string;

    @IsString()
    professionCode: string;

    @IsString()
    languageCode: string;

    @IsOptional()
    published_at?: Date;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TranslationDto)
    translations: TranslationDto[];
}
