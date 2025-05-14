// create-test.dto.ts
import { IsEnum, IsOptional, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateQuestionDto } from './create-question.dto';

export enum TestType {
    PERSONALITY = 'personality',
    INTEREST = 'interest',
    SKILLS = 'skills',
}

export class CreateTestDto {
    @IsString()
    name: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsEnum(TestType)
    test_type: TestType;

    @ValidateNested({ each: true })
    @Type(() => CreateQuestionDto)
    questions: CreateQuestionDto[];
}
