import { PartialType } from '@nestjs/mapped-types';
import { CreateMbtiQuestionDto } from './create-mbti-question.dto';

export class UpdateMbtiQuestionDto extends PartialType(CreateMbtiQuestionDto) {}
