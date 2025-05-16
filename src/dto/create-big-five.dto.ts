// src/dto/create-big-five.dto.ts
import { CreateBigFiveQuestionDto } from './create-big-five-question.dto';

export class CreateBigFiveDto {
  title: string;
  description?: string;
  questions: CreateBigFiveQuestionDto[];
}
