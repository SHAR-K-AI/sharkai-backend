import { PartialType } from '@nestjs/mapped-types';
import { CreateAsvabTestDto } from './create-asvab-test.dto';

export class UpdateAsvabTestDto extends PartialType(CreateAsvabTestDto) {}
