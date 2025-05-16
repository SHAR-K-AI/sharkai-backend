import { PartialType } from '@nestjs/mapped-types';
import { CreateMbtiTestDto } from './create-mbti-test.dto';

export class UpdateMbtiTestDto extends PartialType(CreateMbtiTestDto) {}
