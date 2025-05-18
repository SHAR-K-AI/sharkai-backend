import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req, UseGuards} from "@nestjs/common";
import {CareerFindService} from "../services/career-find.service";
import {CreateCareerFindDto} from "../dto/career-find.dto";
import {AuthGuard} from "@nestjs/passport";

@Controller('career-find')
export class CareerFindController {
    constructor(private readonly service: CareerFindService) {}

    @UseGuards(AuthGuard('jwt'))  // або інший твій Guard
    @Post()
    create(@Req() req, @Body() dto: CreateCareerFindDto) {
        const userId = req.user.id;
        console.log("11111111",userId, "userId")
        return this.service.create(userId, dto);
    }

    @Get()
    findAll() {
        return this.service.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.service.findOne(id);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.service.remove(id);
    }
}
