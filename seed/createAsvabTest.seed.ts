import {AppDataSource} from '../data-source';
import {AsvabTest} from '../src/entities/asvab-test.entity';
import {AsvabQuestion} from '../src/entities/asvab-question.entity';
import {AsvabAnswer} from '../src/entities/asvab-answer.entity';

export async function createAsvabTestWithQuestions() {
    const testRepo = AppDataSource.getRepository(AsvabTest);
    const questionRepo = AppDataSource.getRepository(AsvabQuestion);
    const answerRepo = AppDataSource.getRepository(AsvabAnswer);

    const test = await testRepo.save({
        title: 'ASVAB Practice Test',
        description: 'ASVAB — це тест для визначення здібностей у різних областях, таких як математика, словниковий запас, розуміння тексту тощо.',
    });

    const questions = [
        {
            text: 'Яке число буде наступним у послідовності: 2, 4, 8, 16, ...?',
            category: 'Арифметичне мислення',
            answers: [
                { text: '20', isCorrect: false },
                { text: '24', isCorrect: false },
                { text: '32', isCorrect: true },
                { text: '18', isCorrect: false },
            ],
        },
        // ... інші питання ...
    ];

    for (const q of questions) {
        const savedQuestion = await questionRepo.save({
            test,
            text: q.text,
            category: q.category,
        });

        const answersToSave = q.answers.map(a => ({
            question: savedQuestion,
            text: a.text,
            is_correct: a.isCorrect,  // враховуй назву поля в сутності
        }));

        await answerRepo.save(answersToSave);
    }

    console.log('ASVAB тест і запитання з відповідями успішно створені!');
}
