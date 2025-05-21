import { IsOptional, IsString, IsEmail, IsNumber } from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    first_name?: string;

    @IsOptional()
    @IsString()
    last_name?: string;

    @IsOptional()
    @IsString()
    nickname?: string;

    @IsOptional()
    @IsString()
    position?: string;

    @IsOptional()
    @IsString()
    country?: string;

    @IsOptional()
    @IsString()
    experience?: string;

    @IsOptional()
    @IsString()
    achievements?: string;

    @IsOptional()
    @IsString()
    expectations?: string;

    @IsOptional()
    @IsString()
    employment_options?: string;

    @IsOptional()
    @IsString()
    education?: string;

    @IsOptional()
    @IsString()
    bio?: string;

    @IsOptional()
    @IsNumber()
    rating?: number;

    @IsOptional()
    @IsString()
    linkedin?: string;

    @IsOptional()
    @IsString()
    github?: string;

    @IsOptional()
    @IsString()
    twitter?: string;

    @IsOptional()
    @IsString()
    facebook?: string;
}
