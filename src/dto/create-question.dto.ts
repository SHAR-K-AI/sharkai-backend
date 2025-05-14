// create-question.dto.ts
import { IsString, IsOptional, ValidateNested, IsEnum, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateAnswerDto } from './create-answer.dto';

export enum QuestionType {
    SINGLE_CHOICE = 'single_choice',
    MULTIPLE_CHOICE = 'multiple_choice',
    SCALE = 'scale',
    TEXT_INPUT = 'text_input',
}

export class CreateQuestionDto {
    @IsString()
    question_text: string;

    @IsEnum(QuestionType)
    question_type: QuestionType;

    @IsOptional()
    @IsNumber()
    order?: number;

    @IsOptional()
    @ValidateNested({ each: true })
    @Type(() => CreateAnswerDto)
    answers?: CreateAnswerDto[];
}
