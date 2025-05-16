import { AppDataSource } from '../../data-source';
import { DiscTest } from '../entities/disc-test.entity';
import { DiscQuestion, DiscStyle } from '../entities/disc-question.entity';

export async function createDiscTestWithQuestions() {
    const testRepo = AppDataSource.getRepository(DiscTest);
    const questionRepo = AppDataSource.getRepository(DiscQuestion);

    const test = await testRepo.save({
        title: 'DISC тест на поведінкові стилі',
        description:
            'DISC — це модель, яка описує чотири основні стилі поведінки: Dominance (D), Influence (I), Steadiness (S) та Conscientiousness (C).',
    });

    const questions = [
        { text: 'Я беру на себе лідерство у складних ситуаціях.', style: DiscStyle.D },
        { text: 'Я не боюся приймати складні рішення.', style: DiscStyle.D },
        { text: 'Я люблю переконувати та надихати інших.', style: DiscStyle.I },
        { text: 'Мені подобається бути в центрі уваги.', style: DiscStyle.I },
        { text: 'Я відданий, терплячий і передбачуваний.', style: DiscStyle.S },
        { text: 'Я надаю перевагу стабільності й гармонії в колективі.', style: DiscStyle.S },
        { text: 'Я організований та звертаю увагу на деталі.', style: DiscStyle.C },
        { text: 'Я дотримуюся правил і стандартів.', style: DiscStyle.C },
        // За бажанням — додаткові:
        { text: 'Я швидко приймаю рішення та беру відповідальність.', style: DiscStyle.D },
        { text: 'Мені легко знаходити спільну мову з новими людьми.', style: DiscStyle.I },
        { text: 'Я завжди підтримую інших і уникаю конфліктів.', style: DiscStyle.S },
        { text: 'Я ретельно перевіряю факти перед прийняттям рішень.', style: DiscStyle.C },
    ];

    for (const q of questions) {
        await questionRepo.save({
            test,
            text: q.text,
            style: q.style,
        });
    }

    console.log('DISC тест і запитання успішно створені!');
}
