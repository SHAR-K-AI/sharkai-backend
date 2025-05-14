import { PartialType } from '@nestjs/mapped-types';
import { CreateRiasecTestDto } from './create-riasec-test.dto';

export class UpdateRiasecTestDto extends PartialType(CreateRiasecTestDto) {}
