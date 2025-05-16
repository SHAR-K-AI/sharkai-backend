import { PartialType } from '@nestjs/mapped-types';
import { CreateDiscTestDto } from './create-disc-test.dto';

export class UpdateDiscTestDto extends PartialType(CreateDiscTestDto) {}
