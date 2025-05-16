import { AppDataSource } from '../../data-source';
import { MbtiTest } from '../entities/mbti-test.entity';
import { MbtiQuestion, MbtiDimension } from '../entities/mbti-question.entity';

export async function createMbtiTestWithQuestions() {
    const testRepo = AppDataSource.getRepository(MbtiTest);
    const questionRepo = AppDataSource.getRepository(MbtiQuestion);

    const test = await testRepo.save({
        title: 'Тест на тип особистості MBTI',
        description:
            'Цей тест допоможе визначити ваш тип особистості за методом MBTI (16 типів).',
    });

    const questions = [
        { text: 'Ви отримуєте енергію від спілкування з людьми.', dimension: MbtiDimension.EI },
        { text: 'Ви часто обмірковуєте ідеї перед тим, як щось сказати.', dimension: MbtiDimension.EI },
        { text: 'Вам легше спиратись на факти, ніж на інтуїцію.', dimension: MbtiDimension.SN },
        { text: 'Ви довіряєте своїм враженням більше, ніж даним.', dimension: MbtiDimension.SN },
        { text: 'Ви приймаєте рішення логічно, а не емоційно.', dimension: MbtiDimension.TF },
        { text: 'Вам важливо, щоб інші почувалися добре, навіть якщо доводиться жертвувати логікою.', dimension: MbtiDimension.TF },
        { text: 'Ви надаєте перевагу структурі та плануванню.', dimension: MbtiDimension.JP },
        { text: 'Вам легше імпровізувати, ніж планувати заздалегідь.', dimension: MbtiDimension.JP },
        // Додаткові (за бажанням):
        { text: 'Вам легше завести нові знайомства на вечірці, ніж підтримувати вже наявні.', dimension: MbtiDimension.EI },
        { text: 'Ви часто помічаєте деталі в навколишньому середовищі.', dimension: MbtiDimension.SN },
        { text: 'Під час суперечок ви більше спираєтеся на аргументи, ніж на почуття.', dimension: MbtiDimension.TF },
        { text: 'Вам важливо завершувати справи вчасно та по плану.', dimension: MbtiDimension.JP },
    ];

    for (const q of questions) {
        await questionRepo.save({
            test: test,
            text: q.text,
            dimension: q.dimension,
        });
    }

    console.log('MBTI тест і запитання успішно створені!');
}
