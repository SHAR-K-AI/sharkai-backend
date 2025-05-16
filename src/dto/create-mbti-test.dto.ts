import { IsString, IsOptional } from 'class-validator';

export class CreateMbtiTestDto {
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;
}
