import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Test} from "../entities/test.entity";
import {TestTranslation} from 'src/entities/test-translation.entity';
import {TestQuestion} from 'src/entities/test-question.entity';
import {TestQuestionTranslation} from 'src/entities/test-question-translation.entity';
import {TestAnswerOption} from 'src/entities/test-answer-option.entity';
import {TestsController} from "../controllers/tests.controller";
import {TestsService} from "../services/tests.service";
import {TestAnswerOptionTranslation} from "../entities/test-answer-option-translation.entity";

@Module({
    imports: [TypeOrmModule.forFeature([
        Test, TestTranslation, TestQuestion, TestQuestionTranslation,
        TestAnswerOption, TestAnswerOptionTranslation
    ])],
    controllers: [TestsController],
    providers: [TestsService],
})
export class TestsModule {
}
