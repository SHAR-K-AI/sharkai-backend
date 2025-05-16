import { IsString, IsOptional, ValidateNested, IsArray } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAsvabAnswerDto {
    @IsString()
    text: string;

    @IsOptional()
    isCorrect?: boolean;
}

export class CreateAsvabQuestionDto {
    @IsString()
    text: string;

    @IsString()
    category: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateAsvabAnswerDto)
    answers: CreateAsvabAnswerDto[];
}

export class CreateAsvabTestDto {
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateAsvabQuestionDto)
    questions: CreateAsvabQuestionDto[];
}
