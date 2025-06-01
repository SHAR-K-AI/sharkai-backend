import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Put,
    Delete,
    ParseIntPipe,
} from '@nestjs/common';
import {PublicationsService} from "../services/publications.service";
import {CreatePublicationDto} from "../dto/create-publication.dto";
import {UpdatePublicationDto} from "../dto/update-publication.dto";


@Controller('publications')
export class PublicationsController {
    constructor(private readonly service: PublicationsService) {}

    @Post()
    create(@Body() dto: CreatePublicationDto) {
        return this.service.create(dto);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Get('slug/:slug')
    async getBySlug(@Param('slug') slug: string) {
        return this.service.findBySlug(slug);
    }

    @Put(':id')
    update(
        @Param('id', ParseIntPipe) id: number,
        @Body() dto: UpdatePublicationDto,
    ) {
        return this.service.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.service.remove(id);
    }
}
