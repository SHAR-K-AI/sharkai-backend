// src/mbti/dto/create-user-mbti-result.dto.ts
import { IsUUID, IsString } from 'class-validator';

export class CreateUserMbtiResultDto {
    @IsUUID()
    userId: string;

    @IsUUID()
    testId: string;

    result: Record<string, boolean>;
}
