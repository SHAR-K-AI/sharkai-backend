import { IsString, IsEnum, IsInt } from 'class-validator';
import { DiscStyle } from '../entities/disc-question.entity';

export class CreateDiscQuestionDto {
    @IsString()
    text: string;

    @IsEnum(['D', 'I', 'S', 'C'])
    style: DiscStyle;

    @IsInt()
    testId: number;
}
