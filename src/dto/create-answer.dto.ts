// create-answer.dto.ts
import { IsOptional, IsString, IsNumber } from 'class-validator';

export class CreateAnswerDto {
    @IsString()
    answer_text: string;

    @IsOptional()
    @IsNumber()
    score_value?: number;

    @IsOptional()
    @IsString()
    category?: string;
}
