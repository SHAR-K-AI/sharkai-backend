// src/riasec/dto/update-riasec-question.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateRiasecQuestionDto } from './create-riasec-question.dto';

export class UpdateRiasecQuestionDto extends PartialType(CreateRiasecQuestionDto) {}
