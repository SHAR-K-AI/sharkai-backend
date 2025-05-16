import {AppDataSource} from '../../data-source';
import {AsvabTest} from '../entities/asvab-test.entity';
import {AsvabQuestion} from '../entities/asvab-question.entity';
import {AsvabAnswer} from '../entities/asvab-answer.entity';

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
                {text: '20', isCorrect: false},
                {text: '24', isCorrect: false},
                {text: '32', isCorrect: true},
                {text: '18', isCorrect: false},
            ],
        },
        {
            text: 'Яке слово найближче за значенням до "рясний"?',
            category: 'Словниковий запас',
            answers: [
                {text: 'Дефіцитний', isCorrect: false},
                {text: 'Щедрий', isCorrect: true},
                {text: 'Сухий', isCorrect: false},
                {text: 'Швидкий', isCorrect: false},
            ],
        },
        {
            text: 'Розв’яжіть рівняння: 3x + 5 = 20. Чому дорівнює x?',
            category: 'Математичні знання',
            answers: [
                {text: '3', isCorrect: false},
                {text: '5', isCorrect: true},
                {text: '10', isCorrect: false},
                {text: '15', isCorrect: false},
            ],
        },
        {
            text: 'Хто з наступних є ссавцем?',
            category: 'Загальні науки',
            answers: [
                {text: 'Крокодил', isCorrect: false},
                {text: 'Кит', isCorrect: true},
                {text: 'Акула', isCorrect: false},
                {text: 'Лосось', isCorrect: false},
            ],
        },
        {
            text: 'Яка частина автомобіля передає потужність від двигуна до коліс?',
            category: 'Автомеханіка',
            answers: [
                {text: 'Генератор', isCorrect: false},
                {text: 'Радіатор', isCorrect: false},
                {text: 'Трансмісія', isCorrect: true},
                {text: 'Карбюратор', isCorrect: false},
            ],
        },
        {
            text: 'Що вимірює вольт?',
            category: 'Електротехніка',
            answers: [
                {text: 'Опір', isCorrect: false},
                {text: 'Струм', isCorrect: false},
                {text: 'Напругу', isCorrect: true},
                {text: 'Потужність', isCorrect: false},
            ],
        },
        {
            text: 'Який інструмент використовується для вимірювання кутів?',
            category: 'Механіка',
            answers: [
                {text: 'Транспортир', isCorrect: true},
                {text: 'Гайковий ключ', isCorrect: false},
                {text: 'Молоток', isCorrect: false},
                {text: 'Штангенциркуль', isCorrect: false},
            ],
        },
        {
            text: 'Синонім до слова "доброзичливий"?',
            category: 'Словниковий запас',
            answers: [
                {text: 'Жорстокий', isCorrect: false},
                {text: 'Добрий', isCorrect: true},
                {text: 'Нудний', isCorrect: false},
                {text: 'Мовчазний', isCorrect: false},
            ],
        },
        {
            text: 'Якщо автомобіль проїхав 60 миль за 1.5 години, яка його середня швидкість?',
            category: 'Арифметичне мислення',
            answers: [
                {text: '30 миль/год', isCorrect: false},
                {text: '40 миль/год', isCorrect: false},
                {text: '45 миль/год', isCorrect: true},
                {text: '50 миль/год', isCorrect: false},
            ],
        },
        {
            text: 'Що означає абревіатура ДНК?',
            category: 'Загальні науки',
            answers: [
                {text: 'Дезоксирибонуклеїнова кислота', isCorrect: true},
                {text: 'Динамічний натуральний агент', isCorrect: false},
                {text: 'Цифрова мережева архітектура', isCorrect: false},
                {text: 'Глибока нейронна активація', isCorrect: false},
            ],
        },
    ];

    for (const q of questions) {
        const savedQuestion = await questionRepo.save({
            test,
            text: q.text,
            category: q.category,
        });

        for (const a of q.answers) {
            await answerRepo.save({
                question: savedQuestion,
                text: a.text,
                is_correct: a.isCorrect,
            });
        }
    }

    console.log('ASVAB тест і запитання з відповідями успішно створені!');
}