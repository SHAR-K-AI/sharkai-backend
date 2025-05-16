import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ProfessionModule} from './modules/professions.module';
import {AuthModule} from "./modules/auth.module";
import {UsersModule} from "./modules/users.module";
import {ConfigModule} from '@nestjs/config';
import {IscoCategoryModule} from "./modules/isco-category.module";
import {TestsModule} from "./modules/tests.module";
import {ProfessionCategoriesModule} from "./modules/profession-categories.module";
import {RiasecModule} from "./modules/riasec.module";
import {RiasecQuestionModule} from "./modules/riasec-question.module";
import {MbtiQuestionsModule} from "./modules/mbti-questions.module";
import {MbtiTest} from "./entities/mbti-test.entity";
import {MbtiTestsModule} from "./modules/mbti-tests.module";
import {DiscModule} from "./modules/disc.module";
import {GallupModule} from "./modules/gallup.module";
import {BigFiveModule} from "./modules/big-five.module";
import {AsvabModule} from "./modules/asvab.module";


@Module({
    imports: [
        ConfigModule.forRoot({isGlobal: true}), // Для доступу до env-змінних
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'shark',
            password: '11111111',
            database: 'shark',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: false, // true тільки в розробці
            migrations: ['dist/migrations/*.js'],
        }),
        ProfessionModule,
        AuthModule,
        UsersModule,
        IscoCategoryModule,
        TestsModule,
        ProfessionCategoriesModule,
        RiasecModule,
        RiasecQuestionModule,
        MbtiTestsModule,
        MbtiQuestionsModule,
        DiscModule,
        GallupModule,
        BigFiveModule,
        AsvabModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
