import { IsString, IsOptional, IsArray, ValidateNested, IsInt, Min, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

class TranslationDto {
    @IsString()
    language: string;

    @IsString()
    @MaxLength(255)
    title: string;

    @IsOptional()
    @IsString()
    description?: string;
}

class QuestionTranslationDto {
    @IsString()
    language: string;

    @IsString()
    text: string;
}

class AnswerOptionTranslationDto {
    @IsString()
    language: string;

    @IsString()
    text: string;
}

class AnswerOptionDto {
    @IsInt()
    order: number;

    @IsString()
    value: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnswerOptionTranslationDto)
    translations: AnswerOptionTranslationDto[];
}

class QuestionDto {
    @IsInt()
    order: number;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionTranslationDto)
    translations: QuestionTranslationDto[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => AnswerOptionDto)
    answerOptions: AnswerOptionDto[];
}

export class CreateTestDto {
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => TranslationDto)
    translations: TranslationDto[];

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => QuestionDto)
    questions: QuestionDto[];
}
