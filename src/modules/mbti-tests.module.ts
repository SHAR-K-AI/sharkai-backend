import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MbtiTestsService} from "../services/mbti-tests.service";
import {MbtiTestsController} from "../controllers/mbti-tests.controller";
import {MbtiTest} from "../entities/mbti-test.entity";
import {UserMbtiResult} from "../entities/user-mbti-result.entity";
import {User} from "../entities/user.entity";
import {MbtiTestTranslation} from "../entities/mbti-test-translation.entity";
import { MbtiQuestionTranslation } from 'src/entities/mbti-question-translation.entity';

@Module({
    imports: [TypeOrmModule.forFeature([UserMbtiResult, User, MbtiTest, MbtiTestTranslation, MbtiQuestionTranslation])],
    providers: [MbtiTestsService],
    controllers: [MbtiTestsController],
})
export class MbtiTestsModule {
}
