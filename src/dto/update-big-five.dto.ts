import { PartialType } from '@nestjs/mapped-types';
import { CreateBigFiveDto } from './create-big-five.dto';

export class UpdateBigFiveDto extends PartialType(CreateBigFiveDto) {}
