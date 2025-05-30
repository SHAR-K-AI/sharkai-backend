import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {MbtiTest} from "../entities/mbti-test.entity";
import {CreateMbtiTestDto} from "../dto/create-mbti-test.dto";
import {UpdateMbtiTestDto} from "../dto/update-mbti-test.dto";
import {CreateUserMbtiResultDto} from "../dto/create-user-mbti-result.dto";
import {UserMbtiResult} from "../entities/user-mbti-result.entity";
import {User} from "../entities/user.entity";

@Injectable()
export class MbtiTestsService {
    constructor(
        @InjectRepository(UserMbtiResult)
        private resultRepo: Repository<UserMbtiResult>,
        @InjectRepository(User)
        private userRepo: Repository<User>,
        @InjectRepository(MbtiTest)
        private mbtiTestRepo: Repository<MbtiTest>,
    ) {}

    async findFirst(locale?: string): Promise<any> {
        const tests = await this.mbtiTestRepo.find({
            relations: [
                'translations',
                'questions',
                'questions.translations',
                'questions.options',
                'questions.options.translations',
            ],
            order: { id: 'ASC' },
            take: 1,
        });

        const test = tests[0];

        if (!test) throw new NotFoundException('MBTI Test not found');

        const testTranslation = test.translations.find(t => t.locale === locale);

        return {
            ...test,
            title: testTranslation?.title ?? test.title,
            description: testTranslation?.description ?? test.description,
            questions: test.questions.map(question => {
                const translation = question.translations?.find(t => t.locale === locale);
                return {
                    ...question,
                    text: translation?.text ?? question.text,
                };
            }),
            translations: undefined,
        };
    }


    findAll(): Promise<MbtiTest[]> {
        return this.mbtiTestRepo.find({ relations: ['questions'] });
    }

    async findOne(id: string, locale?: string): Promise<any> {
        const test = await this.mbtiTestRepo.findOne({
            where: { id },
            relations: [
                'questions',
                'questions.translations',
                'translations',
            ],
        });

        if (!test) throw new NotFoundException('MBTI Test not found');

        const testTranslation = test.translations.find(t => t.locale === locale);

        return {
            ...test,
            title: testTranslation?.title ?? test.title,
            description: testTranslation?.description ?? test.description,
            questions: test.questions.map(question => {
                const translation = question.translations?.find(t => t.locale === locale);
                return {
                    ...question,
                    text: translation?.text ?? question.text,
                };
            }),
            translations: undefined,
        };
    }

    create(dto: CreateMbtiTestDto): Promise<MbtiTest> {
        const test = this.mbtiTestRepo.create(dto);
        return this.mbtiTestRepo.save(test);
    }

    async update(id: string, dto: UpdateMbtiTestDto): Promise<MbtiTest> {
        const test = await this.findOne(id);
        Object.assign(test, dto);
        return this.mbtiTestRepo.save(test);
    }

    async remove(id: string): Promise<void> {
        const test = await this.findOne(id);
        await this.mbtiTestRepo.remove(test);
    }

    async saveUserResult(dto: CreateUserMbtiResultDto): Promise<UserMbtiResult> {
        const user = await this.userRepo.findOneByOrFail({ id: Number(dto.userId) });
        const test = await this.mbtiTestRepo.findOneByOrFail({ id: dto.testId });
        const result = this.resultRepo.create({
            user,
            test,
            result: dto.result,
        });

        return this.resultRepo.save(result);
    }

    async findAllByLanguage(language: string): Promise<MbtiTest[]> {
        const tests = await this.mbtiTestRepo
            .createQueryBuilder('test')
            .leftJoinAndSelect('test.translations', 'translation')
            .leftJoinAndSelect('test.questions', 'question')
            .getMany();


        // Фільтруємо переклади по мові
        return tests.map(test => ({
            ...test,
            translations: test.translations.filter(t => t.locale === language),
        }));
    }

    async saveResultFirst(dto: CreateUserMbtiResultDto): Promise<UserMbtiResult> {
        console.log(dto, "dto")
        const user = await this.userRepo.findOneByOrFail({ id: Number(dto.userId) });

        const test = await this.mbtiTestRepo.find({
            order: { id: 'ASC' },
            take: 1,
        });

        if (!test.length) {
            throw new NotFoundException('MBTI Test not found');
        }

        // Шукаємо існуючий результат користувача по тесту
        let existingResult = await this.resultRepo.findOne({
            where: {
                user: { id: user.id },
                test: { id: test[0].id },
            },
        });

        if (existingResult) {
            // Оновлюємо існуючий результат
            existingResult.result = dto.result;
            // Якщо є поле result, можна теж оновити, якщо потрібно
            // existingResult.result = 'user'; // за потребою
            return this.resultRepo.save(existingResult);
        } else {
            // Створюємо новий результат
            const newResult = this.resultRepo.create({
                user,
                test: test[0],
                result: dto.result,
            });
            return this.resultRepo.save(newResult);
        }
    }

}
