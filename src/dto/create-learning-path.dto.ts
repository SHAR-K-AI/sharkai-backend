import {
    IsEnum,
    IsNumber,
    IsOptional,
    IsString,
    IsUUID,
    ValidateNested
} from 'class-validator';
import {Type} from "class-transformer";

export class CreateLearningPathDayDto {
    @IsNumber()
    dayNumber: number;

    @IsString()
    date: string;

    @IsEnum(['lesson', 'test'])
    taskType: 'lesson' | 'test';

    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsUUID()
    testId?: string;

    @IsOptional()
    @IsUUID()
    achievementId?: string;
}

export class CreateLearningPathDto {
    @IsNumber()
    userId: number;

    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsString()
    startDate: string;

    @IsString()
    endDate: string;

    @ValidateNested({ each: true })
    @Type(() => CreateLearningPathDayDto)
    days: CreateLearningPathDayDto[];
}
