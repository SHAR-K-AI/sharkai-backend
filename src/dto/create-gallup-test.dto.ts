import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateGallupTestDto {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsString()
    description?: string;
}
