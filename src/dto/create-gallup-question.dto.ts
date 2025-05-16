import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateGallupQuestionDto {
    @IsString()
    @IsNotEmpty()
    text: string;

    @IsInt()
    testId: number;
}
