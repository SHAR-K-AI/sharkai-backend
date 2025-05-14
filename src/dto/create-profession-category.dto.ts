// src/dto/create-profession-category.dto.ts

import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

export class CreateProfessionCategoryDto {
    @IsNotEmpty()
    @IsString()
    nameUa: string;

    @IsNotEmpty()
    @IsString()
    nameEn: string;

    @IsOptional()
    @IsString()
    descriptionUa?: string;

    @IsOptional()
    @IsString()
    descriptionEn?: string;
}