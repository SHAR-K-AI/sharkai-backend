import { PartialType } from '@nestjs/mapped-types';
import { CreateGallupQuestionDto } from './create-gallup-question.dto';

export class UpdateGallupQuestionDto extends PartialType(CreateGallupQuestionDto) {}
