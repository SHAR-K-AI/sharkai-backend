import { AppDataSource } from "../../data-source";
import { RiasecTest } from "../entities/riasec-test.entity";
import { RiasecQuestion, RiasecType } from "../entities/riasec-question.entity";

export async function createRiasecTestWithQuestions() {
    const testRepo = AppDataSource.getRepository(RiasecTest);
    const questionRepo = AppDataSource.getRepository(RiasecQuestion);

    // Створення тесту
    const test = await testRepo.save({
        title: 'Тест на професійну орієнтацію (RIASEC)',
        description: 'Цей тест допоможе вам визначити, які професії найбільше відповідають вашому типу особистості.',
    });

    // Список запитань
    const questions = [
        { text: 'Ви більше схильні до роботи з людьми чи до самостійної роботи?', type: RiasecType.R },
        { text: 'Ви вважаєте себе більш творчою чи організованою людиною?', type: RiasecType.I },
        { text: 'Ви більше любите працювати руками чи розв’язувати аналітичні задачі?', type: RiasecType.A },
        { text: 'Чи подобається вам працювати в колективі та керувати іншими?', type: RiasecType.S },
        { text: 'Вам цікаво розв’язувати проблеми та знаходити нові підходи до роботи?', type: RiasecType.E },
        { text: 'Чи є для вас важливою стабільність та послідовність у роботі?', type: RiasecType.C },
        { text: 'Чи подобається вам допомагати іншим людям вирішувати їхні проблеми?', type: RiasecType.R },
        { text: 'Ви схильні до наукових чи технічних інтересів?', type: RiasecType.I },
        { text: 'Чи відчуваєте ви задоволення від вирішення складних інженерних завдань?', type: RiasecType.A },
        { text: 'Чи готові ви працювати в умовах високої конкуренції і ризику?', type: RiasecType.E },
    ];

    // Додавання запитань до тесту
    for (const q of questions) {
        await questionRepo.save({
            test: test, // Прив'язуємо тест до запитання
            text: q.text,
            type: q.type, // використовуємо значення enum
            isActive: true,
        });
    }

    console.log('Тест і запитання успішно створені!');
}
