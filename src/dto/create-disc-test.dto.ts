import { IsString, IsOptional } from 'class-validator';

export class CreateDiscTestDto {
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;
}
