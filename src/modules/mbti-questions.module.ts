import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MbtiQuestion} from "../entities/mbti-question.entity";
import {MbtiQuestionsService} from "../services/mbti-questions.service";
import {MbtiQuestionsController} from "../controllers/mbti-questions.controller";
import {MbtiTest} from "../entities/mbti-test.entity";


@Module({
    imports: [TypeOrmModule.forFeature([MbtiTest, MbtiQuestion])],
    providers: [MbtiQuestionsService],
    controllers: [MbtiQuestionsController],
})
export class MbtiQuestionsModule {
}
