import {
    IsOptional,
    IsString,
    IsEmail,
    IsNumber,
    IsArray,
    ArrayNotEmpty,
    ArrayUnique,
    IsDateString
} from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    refreshToken?: string;

    @IsOptional()
    @IsDateString()
    dob?: string;

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


    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    @ArrayUnique()
    employmentTypes?: number[];

    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    @ArrayUnique()
    environmentTypes?: number[];

    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    @ArrayUnique()
    principles?: number[];

    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    @ArrayUnique()
    skills?: number[];

    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    @ArrayUnique()
    interests?: number[];

    @IsOptional()
    @IsArray()
    @ArrayNotEmpty()
    @ArrayUnique()
    educationLevels?: number[];
}
