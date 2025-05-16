import { PartialType } from '@nestjs/mapped-types';
import { CreateDiscQuestionDto } from './create-disc-question.dto';

export class UpdateDiscQuestionDto extends PartialType(CreateDiscQuestionDto) {}
