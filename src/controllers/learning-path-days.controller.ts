import {
    Controller,
    Get,
    Param,
    NotFoundException,
    Patch,
    Body,
    ParseUUIDPipe,
} from '@nestjs/common';
import {LearningPathDaysService} from "../services/learning-path-days.service";
import {UpdateLearningPathDayDto} from "../dto/update-learning-path-day.dto";

@Controller('learning-path-days')
export class LearningPathDaysController {
    constructor(private readonly service: LearningPathDaysService) {}

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.service.findOne(id);
    }

    @Get(':id/publication')
    async getOrGeneratePublication(@Param('id', ParseUUIDPipe) id: string) {
        return this.service.getPublicationIdForDay(id);
    }

    @Patch(':id')
    update(
        @Param('id', ParseUUIDPipe) id: string,
        @Body() updateDto: UpdateLearningPathDayDto,
    ) {
        return this.service.update(id, updateDto);
    }

    @Patch(':id/publication')
    async assignPublication(
        @Param('id', ParseUUIDPipe) id: string,
        @Body('publicationId') publicationId: string,
    ) {
        if (!publicationId) {
            throw new NotFoundException('publicationId is required');
        }

        const updatedDay = await this.service.assignPublicationToDay(id, publicationId);
        return {
            message: `Publication ${publicationId} assigned to learning path day ${id}`,
            data: updatedDay,
        };
    }
}
