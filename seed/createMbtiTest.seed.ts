import { AppDataSource } from '../data-source';
import { MbtiTest } from '../src/entities/mbti-test.entity';
import { MbtiTestTranslation } from '../src/entities/mbti-test-translation.entity';
import { MbtiQuestion, MbtiDimension } from '../src/entities/mbti-question.entity';
import { MbtiQuestionTranslation } from '../src/entities/mbti-question-translation.entity';
import { v4 as uuidv4 } from 'uuid';

export async function createMbtiTestWithQuestions() {
    const testRepo = AppDataSource.getRepository(MbtiTest);
    const testTransRepo = AppDataSource.getRepository(MbtiTestTranslation);
    const questionRepo = AppDataSource.getRepository(MbtiQuestion);
    const questionTransRepo = AppDataSource.getRepository(MbtiQuestionTranslation);

    const test = await testRepo.save({
        id: uuidv4(),
        created_at: new Date(),
    });

    await testTransRepo.save([
        {
            id: uuidv4(),
            test,
            locale: 'uk',
            title: 'Тест на тип особистості MBTI',
            description: 'Цей тест допоможе визначити ваш тип особистості за методом MBTI (16 типів).',
        },
        {
            id: uuidv4(),
            test,
            locale: 'en',
            title: 'MBTI Personality Type Test',
            description: 'This test helps you determine your personality type based on the MBTI method (16 types).',
        },
    ]);

    const questions = [
        {
            uk: 'Ви отримуєте енергію від спілкування з людьми.',
            en: 'You gain energy from interacting with people.',
            dimension: MbtiDimension.EI,
        },
        {
            uk: 'Ви часто обмірковуєте ідеї перед тим, як щось сказати.',
            en: 'You often think through ideas before speaking.',
            dimension: MbtiDimension.EI,
        },
        {
            uk: 'Вам легше спиратись на факти, ніж на інтуїцію.',
            en: 'You rely more on facts than intuition.',
            dimension: MbtiDimension.SN,
        },
        {
            uk: 'Ви довіряєте своїм враженням більше, ніж даним.',
            en: 'You trust your impressions more than data.',
            dimension: MbtiDimension.SN,
        },
        {
            uk: 'Ви приймаєте рішення логічно, а не емоційно.',
            en: 'You make decisions logically rather than emotionally.',
            dimension: MbtiDimension.TF,
        },
        {
            uk: 'Вам важливо, щоб інші почувалися добре, навіть якщо доводиться жертвувати логікою.',
            en: 'It’s important to you that others feel good, even if it means sacrificing logic.',
            dimension: MbtiDimension.TF,
        },
        {
            uk: 'Ви надаєте перевагу структурі та плануванню.',
            en: 'You prefer structure and planning.',
            dimension: MbtiDimension.JP,
        },
        {
            uk: 'Вам легше імпровізувати, ніж планувати заздалегідь.',
            en: 'You find it easier to improvise than to plan ahead.',
            dimension: MbtiDimension.JP,
        },
        {
            uk: 'Вам легше завести нові знайомства на вечірці, ніж підтримувати вже наявні.',
            en: 'It’s easier for you to make new friends at a party than maintain existing ones.',
            dimension: MbtiDimension.EI,
        },
        {
            uk: 'Ви часто помічаєте деталі в навколишньому середовищі.',
            en: 'You often notice details in your surroundings.',
            dimension: MbtiDimension.SN,
        },
        {
            uk: 'Під час суперечок ви більше спираєтеся на аргументи, ніж на почуття.',
            en: 'In arguments, you rely more on reasoning than on feelings.',
            dimension: MbtiDimension.TF,
        },
        {
            uk: 'Вам важливо завершувати справи вчасно та по плану.',
            en: 'It’s important to you to finish tasks on time and according to plan.',
            dimension: MbtiDimension.JP,
        },
    ];

    for (const q of questions) {
        const question = await questionRepo.save({
            id: uuidv4(),
            test,
            dimension: q.dimension,
            created_at: new Date(),
        });

        await questionTransRepo.save([
            {
                id: uuidv4(),
                question,
                locale: 'uk',
                text: q.uk,
            },
            {
                id: uuidv4(),
                question,
                locale: 'en',
                text: q.en,
            },
        ]);
    }

    console.log('MBTI тест і запитання з перекладами (uk, en) успішно створені!');
}
