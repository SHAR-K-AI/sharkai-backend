import { IsOptional, IsString, ValidateNested, ArrayMinSize } from 'class-validator';
import { Type } from 'class-transformer';
import { PrincipleTranslationDto } from './create-principle.dto';

export class UpdatePrincipleDto {
    @IsOptional()
    @IsString()
    category?: string;

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => PrincipleTranslationDto)
    @ArrayMinSize(1)
    translations?: PrincipleTranslationDto[];
}
