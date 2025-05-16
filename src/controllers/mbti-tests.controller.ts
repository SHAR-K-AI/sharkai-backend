import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import {MbtiTestsService} from "../services/mbti-tests.service";
import {CreateMbtiTestDto} from "../dto/create-mbti-test.dto";
import {UpdateMbtiTestDto} from "../dto/update-mbti-test.dto";
import {CreateUserMbtiResultDto} from "../dto/create-user-mbti-result.dto";
import {UserMbtiResult} from "../entities/user-mbti-result.entity";

@Controller('mbti-tests')
export class MbtiTestsController {
    constructor(private readonly mbtiTestsService: MbtiTestsService) {}

    @Get()
    findAll() {
        return this.mbtiTestsService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.mbtiTestsService.findOne(id);
    }

    @Post()
    create(@Body() dto: CreateMbtiTestDto) {
        return this.mbtiTestsService.create(dto);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() dto: UpdateMbtiTestDto) {
        return this.mbtiTestsService.update(id, dto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.mbtiTestsService.remove(id);
    }

    @Post('results')
    async saveResult(@Body() dto: CreateUserMbtiResultDto): Promise<UserMbtiResult> {
        return this.mbtiTestsService.saveUserResult(dto);
    }
}
