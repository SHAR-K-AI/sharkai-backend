// src/riasec/dto/create-riasec-question.dto.ts

import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import {RiasecType} from "../entities/riasec-question.entity";

export class CreateRiasecQuestionDto {
    @IsString()
    @IsNotEmpty()
    text: string;

    @IsEnum(RiasecType)
    type: RiasecType;

    @IsNotEmpty()
    testId: number;
}