import { IsDateString, IsEnum, IsInt, IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateLearningPathDayDto {
    @IsOptional()
    @IsInt()
    day_number?: number;

    @IsOptional()
    @IsDateString()
    date?: string;

    @IsOptional()
    @IsString()
    task_type?: string;

    @IsOptional()
    @IsUUID()
    testId?: string;

    @IsOptional()
    @IsInt()
    publicationId?: number;

    @IsOptional()
    @IsUUID()
    achievement_id?: string;
}
