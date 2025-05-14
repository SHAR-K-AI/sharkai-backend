import { PartialType } from '@nestjs/mapped-types';
import { CreateProfessionCategoryDto } from './create-profession-category.dto';

export class UpdateProfessionCategoryDto extends PartialType(CreateProfessionCategoryDto) {}
