import { IsUUID, IsString } from 'class-validator';

export class CreateMbtiQuestionDto {
    @IsUUID()
    test_id: string;

    @IsString()
    text: string;

    @IsString()
    dimension: string;
}
