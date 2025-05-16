// src/dto/create-big-five-question.dto.ts
export class CreateBigFiveQuestionDto {
    text: string;
    factor: 'O' | 'C' | 'E' | 'A' | 'N';
}
