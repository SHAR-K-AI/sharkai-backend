import { AppDataSource } from '../data-source';
import {BigFiveTest} from "../src/entities/big-five-test.entity";
import {BigFiveFactor, BigFiveQuestion} from "../src/entities/big-five-question.entity";


export async function createBigFiveTestWithQuestions() {
    const testRepo = AppDataSource.getRepository(BigFiveTest);
    const questionRepo = AppDataSource.getRepository(BigFiveQuestion);

    const test = await testRepo.save({
        title: 'Big Five тест особистості',
        description:
            'Big Five — це модель, яка вимірює п’ять основних рис особистості: відкритість (O), сумлінність (C), екстраверсію (E), доброзичливість (A) та нейротизм (N).',
    });

    const questions = [
        { text: 'Я маю багату уяву.', factor: BigFiveFactor.O },
        { text: 'Мені подобається досліджувати нові ідеї.', factor: BigFiveFactor.O },
        { text: 'Я працюю ретельно і старанно.', factor: BigFiveFactor.C },
        { text: 'Я завжди доводжу справи до кінця.', factor: BigFiveFactor.C },
        { text: 'Я почуваюся комфортно в центрі уваги.', factor: BigFiveFactor.E },
        { text: 'Я люблю спілкуватися з новими людьми.', factor: BigFiveFactor.E },
        { text: 'Я співчутливий до інших.', factor: BigFiveFactor.A },
        { text: 'Я готовий допомогти, навіть якщо зайнятий.', factor: BigFiveFactor.A },
        { text: 'Я часто відчуваю занепокоєння.', factor: BigFiveFactor.N },
        { text: 'Я легко засмучуюся.', factor: BigFiveFactor.N },
    ];

    for (const q of questions) {
        await questionRepo.save({
            test,
            text: q.text,
            factor: q.factor,
        });
    }

    console.log('Big Five тест і запитання успішно створені!');
}
