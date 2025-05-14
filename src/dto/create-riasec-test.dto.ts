import { IsOptional, IsString } from 'class-validator';

export class CreateRiasecTestDto {
    @IsString()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;
}
