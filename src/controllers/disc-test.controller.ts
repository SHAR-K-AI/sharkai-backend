import {
    Controller,
    Get,
    Post,
    Patch,
    Delete,
    Param,
    Body,
    ParseIntPipe,
    Query,
} from '@nestjs/common';
import {DiscService} from "../services/disc-test.service";
import {CreateDiscTestDto} from "../dto/create-disc-test.dto";
import { UpdateDiscTestDto } from 'src/dto/update-disc-test.dto';
import {CreateDiscQuestionDto} from "../dto/create-disc-question.dto";
import {UpdateDiscQuestionDto} from "../dto/update-disc-question.dto";



@Controller('disc')
export class DiscController {
    constructor(private readonly discService: DiscService) {}

    // --- DISC Tests ---

    @Get('tests')
    getTests() {
        return this.discService.findAllTests();
    }

    @Get('tests/:id')
    getTest(@Param('id', ParseIntPipe) id: number) {
        return this.discService.findOneTest(id);
    }

    @Post('tests')
    createTest(@Body() dto: CreateDiscTestDto) {
        return this.discService.createTest(dto);
    }

    @Patch('tests/:id')
    updateTest(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateDiscTestDto) {
        return this.discService.updateTest(id, dto);
    }

    @Delete('tests/:id')
    deleteTest(@Param('id', ParseIntPipe) id: number) {
        return this.discService.deleteTest(id);
    }

    // --- DISC Questions ---

    @Get('questions')
    getQuestions(@Query('testId') testId?: string) {
        return this.discService.findAllQuestions(testId ? +testId : undefined);
    }

    @Get('questions/:id')
    getQuestion(@Param('id', ParseIntPipe) id: number) {
        return this.discService.findOneQuestion(id);
    }

    @Post('questions')
    createQuestion(@Body() dto: CreateDiscQuestionDto) {
        return this.discService.createQuestion(dto);
    }

    @Patch('questions/:id')
    updateQuestion(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateDiscQuestionDto) {
        return this.discService.updateQuestion(id, dto);
    }

    @Delete('questions/:id')
    deleteQuestion(@Param('id', ParseIntPipe) id: number) {
        return this.discService.deleteQuestion(id);
    }
}
