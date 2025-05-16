import { AppDataSource } from '../data-source';
import { GallupTest } from '../src/entities/gallup-test.entity';
import { GallupQuestion } from '../src/entities/gallup-question.entity';

export async function createGallupTestWithQuestions() {
    const testRepo = AppDataSource.getRepository(GallupTest);
    const questionRepo = AppDataSource.getRepository(GallupQuestion);

    const test = await testRepo.save({
        title: 'Gallup тест на виявлення сильних сторін',
        description: 'Цей тест допомагає виявити ваші природні таланти за методикою Gallup StrengthsFinder.',
    });

    const questions = [
        {
            leftStatement: 'Я люблю планувати все наперед.',
            rightStatement: 'Я імпровізую і дію за обставинами.',
        },
        {
            leftStatement: 'Я швидко встановлюю контакт з новими людьми.',
            rightStatement: 'Я глибоко розвиваю стосунки з кількома обраними людьми.',
        },
        {
            leftStatement: 'Я аналізую всі факти перед дією.',
            rightStatement: 'Я покладаюся на інтуїцію та досвід.',
        },
        {
            leftStatement: 'Мені подобається організовувати процеси.',
            rightStatement: 'Я люблю створювати нові ідеї.',
        },
        {
            leftStatement: 'Я завжди дотримуюсь дедлайнів.',
            rightStatement: 'Я фокусуюсь на якості, навіть якщо це займає більше часу.',
        },
        {
            leftStatement: 'Я відчуваю енергію в конкуренції.',
            rightStatement: 'Я намагаюся уникати змагань.',
        },
        {
            leftStatement: 'Я прагну до досконалості у всьому.',
            rightStatement: 'Я шукаю баланс між зусиллями та результатом.',
        },
        {
            leftStatement: 'Я часто беру на себе лідерство.',
            rightStatement: 'Я надаю перевагу підтримці інших.',
        },
        {
            leftStatement: 'Мені важливо бути визнаним.',
            rightStatement: 'Я отримую задоволення, коли допомагаю іншим досягти успіху.',
        },
        {
            leftStatement: 'Я швидко приймаю рішення.',
            rightStatement: 'Я обмірковую можливі наслідки перед дією.',
        },
    ];

    for (const q of questions) {
        await questionRepo.save({
            test,
            leftStatement: q.leftStatement,
            rightStatement: q.rightStatement,
        });
    }

    console.log('Gallup тест і запитання успішно створені!');
}
