import { PartialType } from '@nestjs/mapped-types';
import { CreateGallupTestDto } from './create-gallup-test.dto';

export class UpdateGallupTestDto extends PartialType(CreateGallupTestDto) {}
