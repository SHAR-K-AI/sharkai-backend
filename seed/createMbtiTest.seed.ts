import { AppDataSource } from '../data-source';
import { MbtiTest } from '../src/entities/mbti-test.entity';
import { MbtiTestTranslation } from '../src/entities/mbti-test-translation.entity';
import { MbtiQuestion } from '../src/entities/mbti-question.entity';
import { MbtiQuestionTranslation } from '../src/entities/mbti-question-translation.entity';
import { MbtiOption } from '../src/entities/mbti-option.entity';
import { MbtiOptionTranslation } from '../src/entities/mbti-option-translation.entity';
import { v4 as uuidv4 } from 'uuid';

export async function createMbtiTestWithQuestions() {
    const testRepo = AppDataSource.getRepository(MbtiTest);
    const testTransRepo = AppDataSource.getRepository(MbtiTestTranslation);
    const questionRepo = AppDataSource.getRepository(MbtiQuestion);
    const questionTransRepo = AppDataSource.getRepository(MbtiQuestionTranslation);
    const optionRepo = AppDataSource.getRepository(MbtiOption);
    const optionTransRepo = AppDataSource.getRepository(MbtiOptionTranslation);

    const test = await testRepo.save({
        id: 'mbti',
        created_at: new Date(),
    });

    await testTransRepo.save([
        {
            id: uuidv4(),
            test,
            locale: 'uk',
            title: 'MBTI',
            subtitle: 'Тип особистості',
            description: 'Визначає ваш тип особистості серед 16 категорій, щоб допомогти знайти ідеальну кар’єру та краще зрозуміти себе.',
        },
        {
            id: uuidv4(),
            test,
            locale: 'en',
            title: 'MBTI',
            subtitle: 'Personality Type',
            description: 'Determines your personality type among 16 categories to help find the ideal career and understand yourself better.',
        },
    ]);

    const questions = [
        {
            uk: 'Як ви надаєте перевагу працювати?',
            en: 'How do you prefer to work?',
            options: [
                {
                    dimension: 'E',
                    uk: 'У команді, обмінюючись ідеями',
                    en: 'In a team, exchanging ideas',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Окремо, зосереджено працюючи наодинці',
                    en: 'Alone, focusing deeply',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви заряджаєтесь енергією після важкого дня?',
            en: 'How do you recharge energy after a tough day?',
            options: [
                {
                    dimension: 'E',
                    uk: 'З друзями, у спілкуванні',
                    en: 'With friends, socializing',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Наодинці, у спокої',
                    en: 'Alone, in calm',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви віддаєте перевагу отримувати інформацію?',
            en: 'How do you prefer to receive information?',
            options: [
                {
                    dimension: 'S',
                    uk: 'З конкретних фактів і деталей',
                    en: 'From concrete facts and details',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'З великих ідей та можливостей',
                    en: 'From big ideas and possibilities',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Що для вас важливіше в роботі?',
            en: 'What is more important to you at work?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Практичні завдання з чіткими інструкціями',
                    en: 'Practical tasks with clear instructions',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Можливість бачити широку перспективу',
                    en: 'Ability to see the big picture',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Як ви приймаєте рішення?',
            en: 'How do you make decisions?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Логічно та об\'єктивно',
                    en: 'Logically and objectively',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Враховуючи почуття та емоції',
                    en: 'Considering feelings and emotions',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Як ви зазвичай працюєте над завданнями?',
            en: 'How do you usually work on tasks?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Планую та організовую наперед',
                    en: 'Plan and organize in advance',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Імпровізую та пристосовуюсь під час роботи',
                    en: 'Improvise and adapt while working',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Як ви ставитесь до дедлайнів?',
            en: 'How do you approach deadlines?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Виконую завдання заздалегідь',
                    en: 'Complete tasks ahead of time',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Працюю інтенсивно в останній момент',
                    en: 'Work intensively at the last moment',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'У новому колективі ви:',
            en: 'In a new team, you:',
            options: [
                {
                    dimension: 'E',
                    uk: 'Швидко знайомлюсь і легко вливаюсь',
                    en: 'Quickly get to know people and blend in',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Поступово адаптуюсь і спостерігаю',
                    en: 'Gradually adapt and observe',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Який стиль навчання вам ближчий?',
            en: 'Which learning style suits you better?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Групові заняття та активні обговорення',
                    en: 'Group classes and active discussions',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Самостійне вивчення матеріалу',
                    en: 'Self-study',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви приймаєте рішення в команді?',
            en: 'How do you make decisions in a team?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Обговорюю факти і логіку',
                    en: 'Discuss facts and logic',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Враховую думки і почуття інших',
                    en: 'Consider others’ opinions and feelings',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Ви більше довіряєте:',
            en: 'You tend to trust:',
            options: [
                {
                    dimension: 'S',
                    uk: 'Досвіду та перевіреним фактам',
                    en: 'Experience and proven facts',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Інтуїції та інноваційним ідеям',
                    en: 'Intuition and innovative ideas',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'У вирішенні проблем ви зазвичай:',
            en: 'When solving problems, you usually:',
            options: [
                {
                    dimension: 'T',
                    uk: 'Аналізуєте логіку та факти',
                    en: 'Analyze logic and facts',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Берете до уваги емоції та цінності',
                    en: 'Consider emotions and values',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'В роботі ви надаєте перевагу:',
            en: 'At work, you prefer:',
            options: [
                {
                    dimension: 'J',
                    uk: 'Чітким планам і структурі',
                    en: 'Clear plans and structure',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Гнучкості та можливості змін',
                    en: 'Flexibility and possibility to change',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Якщо у вас багато завдань, ви:',
            en: 'If you have many tasks, you:',
            options: [
                {
                    dimension: 'J',
                    uk: 'Розподіляєте час і працюєте систематично',
                    en: 'Manage time and work systematically',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Підходите по ситуації і часто змінюєте пріоритети',
                    en: 'Approach situationally and often change priorities',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Якщо ви отримуєте нову інформацію, вам важливо:',
            en: 'When you receive new information, it is important for you to:',
            options: [
                {
                    dimension: 'S',
                    uk: 'Зрозуміти деталі та факти',
                    en: 'Understand details and facts',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Побачити загальний контекст і можливості',
                    en: 'See the overall context and possibilities',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Що більше мотивує вас на роботі?',
            en: 'What motivates you more at work?',
            options: [
                {
                    dimension: 'F',
                    uk: 'Почуття, що моя робота допомагає іншим',
                    en: 'Feeling that my work helps others',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
                {
                    dimension: 'T',
                    uk: 'Вирішення складних задач та логічних викликів',
                    en: 'Solving complex problems and logical challenges',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
            ],
        },
        {
            uk: 'Як ви віддаєте перевагу планувати свій день?',
            en: 'How do you prefer to plan your day?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Створюю розклад і дотримуюсь його',
                    en: 'Create a schedule and stick to it',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Планую лише загально, залишаю місце для імпровізації',
                    en: 'Plan generally, leaving room for improvisation',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Як ви реагуєте на несподівані зміни у роботі?',
            en: 'How do you react to unexpected changes at work?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Відчуваю дискомфорт і намагаюся відновити порядок',
                    en: 'Feel uncomfortable and try to restore order',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Легко адаптуюсь і шукаю нові можливості',
                    en: 'Adapt easily and look for new opportunities',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Ви віддаєте перевагу спілкуванню, яке:',
            en: 'You prefer communication that:',
            options: [
                {
                    dimension: 'E',
                    uk: 'Жваве і енергійне',
                    en: 'Lively and energetic',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Спокійне і продумане',
                    en: 'Calm and thoughtful',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви оцінюєте ідеї?',
            en: 'How do you evaluate ideas?',
            options: [
                {
                    dimension: 'N',
                    uk: 'За їх потенціалом і можливими наслідками',
                    en: 'By their potential and possible consequences',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
                {
                    dimension: 'S',
                    uk: 'За їх практичністю і реальністю',
                    en: 'By their practicality and reality',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
            ],
        },
        {
            uk: 'Як ви приймаєте рішення у складних ситуаціях?',
            en: 'How do you make decisions in difficult situations?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Використовую логіку та об\'єктивний аналіз',
                    en: 'Use logic and objective analysis',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Враховую почуття та вплив на інших',
                    en: 'Consider feelings and impact on others',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Ви краще працюєте, коли маєте:',
            en: 'You work better when you have:',
            options: [
                {
                    dimension: 'J',
                    uk: 'Чітко визначені терміни та структуру',
                    en: 'Clear deadlines and structure',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Можливість змінювати підхід під час роботи',
                    en: 'Flexibility to change approach during work',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Що для вас важливіше у роботі?',
            en: 'What is more important to you at work?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Спілкування з людьми та активна взаємодія',
                    en: 'Communication with people and active interaction',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Глибока концентрація і самостійна робота',
                    en: 'Deep focus and working alone',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Ви віддаєте перевагу роботі, що:',
            en: 'You prefer work that:',
            options: [
                {
                    dimension: 'S',
                    uk: 'Базується на фактах і реальному досвіді',
                    en: 'Is based on facts and real experience',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Вимагає творчості та інноваційного мислення',
                    en: 'Requires creativity and innovative thinking',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'У спілкуванні ви зазвичай:',
            en: 'In communication, you usually:',
            options: [
                {
                    dimension: 'E',
                    uk: 'Виражаєте думки відкрито і активно',
                    en: 'Express thoughts openly and actively',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Обдумуєте слова перед тим, як говорити',
                    en: 'Think before speaking',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Вам легше працювати з:',
            en: 'You find it easier to work with:',
            options: [
                {
                    dimension: 'J',
                    uk: 'Чіткими планами та розкладом',
                    en: 'Clear plans and schedules',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Відкритими можливостями і варіантами',
                    en: 'Open possibilities and options',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Що для вас важливіше при навчанні новому?',
            en: 'What is more important to you when learning something new?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Конкретні факти і кроки',
                    en: 'Concrete facts and steps',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Концепції і ідеї',
                    en: 'Concepts and ideas',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Як ви сприймаєте конфлікти?',
            en: 'How do you perceive conflicts?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Як можливість вирішити проблему раціонально',
                    en: 'As an opportunity to solve the problem rationally',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Як ситуацію, що вимагає врахування емоцій',
                    en: 'As a situation requiring emotional consideration',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'У команді ви зазвичай:',
            en: 'In a team, you usually:',
            options: [
                {
                    dimension: 'E',
                    uk: 'Активно ініціюєте обговорення',
                    en: 'Actively initiate discussions',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Більше слухаєте і обдумуєте сказане',
                    en: 'Listen more and think over what is said',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Ви віддаєте перевагу завданням, які:',
            en: 'You prefer tasks that:',
            options: [
                {
                    dimension: 'J',
                    uk: 'Чітко визначені і завершені',
                    en: 'Are clearly defined and completed',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Гнучкі і відкриті для змін',
                    en: 'Are flexible and open to change',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Як ви зазвичай ставитесь до правил і процедур на роботі?',
            en: 'How do you usually feel about rules and procedures at work?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Вважаю їх важливими і дотримуюсь їх',
                    en: 'Consider them important and follow them',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Іноді віддаю перевагу обходитись без них',
                    en: 'Sometimes prefer to work around them',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Що для вас важливіше у колективі?',
            en: 'What is more important to you in a team?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Активна взаємодія та обмін ідеями',
                    en: 'Active interaction and idea exchange',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Спокійна атмосфера і можливість зосередитись',
                    en: 'Calm atmosphere and the ability to focus',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви волієте отримувати інформацію?',
            en: 'How do you prefer to receive information?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Через конкретні факти і деталі',
                    en: 'Through concrete facts and details',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Через узагальнення і концепції',
                    en: 'Through generalizations and concepts',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Ви більше довіряєте:',
            en: 'You tend to trust:',
            options: [
                {
                    dimension: 'T',
                    uk: 'Раціональному мисленню та фактам',
                    en: 'Rational thinking and facts',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Почуттям і цінностям людей',
                    en: 'Feelings and values of people',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Що вам більше підходить у роботі?',
            en: 'What suits you more at work?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Планувати і дотримуватись розкладу',
                    en: 'Planning and sticking to a schedule',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Бути гнучким і пристосовуватись до змін',
                    en: 'Being flexible and adapting to changes',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'У спілкуванні ви частіше:',
            en: 'In communication, you more often:',
            options: [
                {
                    dimension: 'E',
                    uk: 'Проявляєте ініціативу і відкритість',
                    en: 'Take initiative and openness',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Обдумуєте сказане і слухаєте',
                    en: 'Think over what you say and listen',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви сприймаєте нові ідеї?',
            en: 'How do you perceive new ideas?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Застосовую їх до реального досвіду',
                    en: 'Apply them to real experience',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Розглядаю їх у ширшому контексті',
                    en: 'Consider them in a broader context',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Що для вас важливіше при вирішенні проблем?',
            en: 'What is more important to you when solving problems?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Об\'єктивність і логіка',
                    en: 'Objectivity and logic',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Врахування емоцій та потреб інших',
                    en: 'Consideration of emotions and others\' needs',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Ви віддаєте перевагу роботі, де:',
            en: 'You prefer work where:',
            options: [
                {
                    dimension: 'J',
                    uk: 'Всі задачі заплановані заздалегідь',
                    en: 'All tasks are planned in advance',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Можна імпровізувати і змінювати плани',
                    en: 'You can improvise and change plans',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Як ви зазвичай реагуєте на стресові ситуації?',
            en: 'How do you usually react to stressful situations?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Шукаю підтримки і допомоги у інших',
                    en: 'Seek support and help from others',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Обдумую все самостійно, у тиші',
                    en: 'Think everything over by myself, in silence',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви зазвичай організовуєте свій робочий день?',
            en: 'How do you usually organize your workday?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Складаю чіткий план і дотримуюсь його',
                    en: 'Make a clear plan and stick to it',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Дію за обставинами і імпровізую',
                    en: 'Go with the flow and improvise',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Що для вас важливіше у виборі професії?',
            en: 'What is more important to you when choosing a profession?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Логіка і ефективність',
                    en: 'Logic and efficiency',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Гармонія і підтримка інших',
                    en: 'Harmony and supporting others',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Як ви віддаєте перевагу отримувати інформацію?',
            en: 'How do you prefer to receive information?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Через факти і деталі',
                    en: 'Through facts and details',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Через загальну картину і можливості',
                    en: 'Through the big picture and possibilities',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Як ви відпочиваєте після насиченого робочого дня?',
            en: 'How do you relax after a busy workday?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Спілкуюся з друзями або колегами',
                    en: 'Interact with friends or colleagues',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Проводжу час наодинці, відновлюючи сили',
                    en: 'Spend time alone to recharge',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви приймаєте складні рішення на роботі?',
            en: 'How do you make difficult decisions at work?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Спираюся на логіку і факти',
                    en: 'Rely on logic and facts',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Враховую почуття і вплив на людей',
                    en: 'Consider feelings and impact on people',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Який стиль роботи вам більше підходить?',
            en: 'What work style suits you better?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Планую заздалегідь і дотримуюсь графіку',
                    en: 'Plan ahead and follow a schedule',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Відкритий до змін і нових можливостей',
                    en: 'Open to changes and new opportunities',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Як ви зазвичай вирішуєте конфлікти в команді?',
            en: 'How do you usually resolve conflicts in a team?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Обговорюю факти і шукаю логічне рішення',
                    en: 'Discuss facts and find a logical solution',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Прагну зрозуміти почуття інших і знайти компроміс',
                    en: 'Try to understand others’ feelings and find a compromise',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Що вам допомагає ефективніше навчатися?',
            en: 'What helps you learn more effectively?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Практичні вправи і конкретні приклади',
                    en: 'Practical exercises and concrete examples',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Теорія і концепції, які можна застосувати',
                    en: 'Theory and concepts that can be applied',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Як ви поводитеся на співбесіді?',
            en: 'How do you behave in an interview?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Активно спілкуюсь і ставлю питання',
                    en: 'Actively communicate and ask questions',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Більше слухаю і обдумую відповіді',
                    en: 'Listen more and think over answers',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви ставитесь до змін у професійному житті?',
            en: 'How do you feel about changes in your professional life?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Планую і готуюсь до змін заздалегідь',
                    en: 'Plan and prepare for changes in advance',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Приймаю зміни як можливість для зростання',
                    en: 'Accept changes as opportunities for growth',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Як ви віддаєте перевагу отримувати зворотний зв’язок на роботі?',
            en: 'How do you prefer to receive feedback at work?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Прямо і конкретно, без емоцій',
                    en: 'Direct and specific, without emotions',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Тактовно і з урахуванням моїх почуттів',
                    en: 'Tactfully and considering my feelings',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Який підхід до вирішення проблем ви обираєте?',
            en: 'What approach do you choose for problem-solving?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Крок за кроком, спираючись на перевірену інформацію',
                    en: 'Step by step, relying on verified information',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Шукаю нестандартні рішення і можливості',
                    en: 'Look for unconventional solutions and possibilities',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Як ви відчуваєте себе в новій команді?',
            en: 'How do you feel in a new team?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Швидко заводжу знайомства і інтегруюсь',
                    en: 'Quickly make acquaintances and integrate',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Спостерігаю і звикаю поступово',
                    en: 'Observe and get used gradually',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Що для вас важливіше в роботі?',
            en: 'What is more important for you at work?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Структура і стабільність',
                    en: 'Structure and stability',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Гнучкість і свобода вибору',
                    en: 'Flexibility and freedom of choice',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Як ви зазвичай приймаєте рішення в складних ситуаціях?',
            en: 'How do you usually make decisions in difficult situations?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Спираюся на аналіз і логіку',
                    en: 'Rely on analysis and logic',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Прислухаюся до своїх цінностей і почуттів',
                    en: 'Listen to my values and feelings',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Який стиль спілкування вам ближчий?',
            en: 'What communication style suits you better?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Відкритий і активний',
                    en: 'Open and active',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Спокійний і зосереджений',
                    en: 'Calm and focused',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви плануєте свою роботу?',
            en: 'How do you plan your work?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Встановлюю дедлайни і чіткі цілі',
                    en: 'Set deadlines and clear goals',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Відкритий до змін і коригувань у процесі',
                    en: 'Open to changes and adjustments during the process',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Що мотивує вас на роботі?',
            en: 'What motivates you at work?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Практичний результат і конкретні досягнення',
                    en: 'Practical results and concrete achievements',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Можливість реалізувати нові ідеї',
                    en: 'Opportunity to implement new ideas',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Як ви віддаєте перевагу працювати в команді?',
            en: 'How do you prefer to work in a team?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Активно обговорюю ідей і підтримую контакт',
                    en: 'Actively discuss ideas and maintain contact',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Працюю над завданнями індивідуально',
                    en: 'Work on tasks individually',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви реагуєте на несподівані зміни у планах?',
            en: 'How do you react to unexpected changes in plans?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Відчуваю дискомфорт і намагаюся повернути контроль',
                    en: 'Feel discomfort and try to regain control',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Спокійно приймаю і пристосовуюсь',
                    en: 'Calmly accept and adapt',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Як ви віддаєте перевагу працювати над великим проєктом?',
            en: 'How do you prefer to work on a big project?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Планую заздалегідь і слідую графіку',
                    en: 'Plan ahead and follow a schedule',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Працюю імпульсивно, реагуючи на ситуацію',
                    en: 'Work impulsively, reacting to the situation',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Що для вас важливіше у робочому процесі?',
            en: 'What is more important to you in the work process?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Факти і реальні деталі',
                    en: 'Facts and real details',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Ідеї та можливості',
                    en: 'Ideas and possibilities',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Як ви зазвичай реагуєте на конфлікти на роботі?',
            en: 'How do you usually react to conflicts at work?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Аналізую ситуацію і шукаю логічне рішення',
                    en: 'Analyze the situation and look for a logical solution',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Спробую врахувати почуття інших і знайти компроміс',
                    en: 'Try to consider others’ feelings and find a compromise',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Який спосіб роботи вам більш комфортний?',
            en: 'Which way of working is more comfortable for you?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Обговорення ідей з колегами',
                    en: 'Discussing ideas with colleagues',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Працювати самостійно і зосереджено',
                    en: 'Work independently and focused',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви організовуєте свій робочий день?',
            en: 'How do you organize your workday?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Створюю чіткий розклад і дотримуюсь його',
                    en: 'Create a clear schedule and stick to it',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Реагую на ситуації і змінюю плани за потреби',
                    en: 'React to situations and change plans as needed',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Що для вас важливіше при виборі роботи?',
            en: 'What is more important to you when choosing a job?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Практичні навички і конкретні задачі',
                    en: 'Practical skills and concrete tasks',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Можливість креативити і втілювати ідеї',
                    en: 'The possibility to be creative and implement ideas',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Як ви віддаєте перевагу отримувати інформацію?',
            en: 'How do you prefer to receive information?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Конкретні факти і дані',
                    en: 'Specific facts and data',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Значення і контекст',
                    en: 'Meaning and context',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Який стиль керівництва вам більше підходить?',
            en: 'What leadership style suits you best?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Об’єктивний і справедливий, орієнтований на результат',
                    en: 'Objective and fair, result-oriented',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Підтримуючий і враховуючий потреби команди',
                    en: 'Supportive and considerate of team needs',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Як ви зазвичай приймаєте рішення у стресових ситуаціях?',
            en: 'How do you usually make decisions in stressful situations?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Швидко аналізую і приймаю рішення',
                    en: 'Quickly analyze and make decisions',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Надаю перевагу більше часу для обдумування',
                    en: 'Prefer more time for consideration',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Що вас більше мотивує у роботі?',
            en: 'What motivates you more at work?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Спілкування і взаємодія з іншими',
                    en: 'Communication and interaction with others',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Глибока концентрація і самостійність',
                    en: 'Deep concentration and independence',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви зазвичай плануєте свої робочі завдання?',
            en: 'How do you usually plan your work tasks?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Переважно заздалегідь і систематично',
                    en: 'Mostly in advance and systematically',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Вирішую по ходу, за потребою',
                    en: 'Decide on the go, as needed',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Що ви цінуєте більше в командній роботі?',
            en: 'What do you value more in teamwork?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Обговорення та обмін думками',
                    en: 'Discussion and exchange of ideas',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Тиху і зосереджену роботу кожного',
                    en: 'Quiet and focused work of each member',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Який тип інформації ви віддаєте перевагу у звітах?',
            en: 'What type of information do you prefer in reports?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Конкретні факти та цифри',
                    en: 'Concrete facts and figures',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Аналіз і висновки',
                    en: 'Analysis and conclusions',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Як ви ставитесь до змін у робочому процесі?',
            en: 'How do you feel about changes in the work process?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Віддаю перевагу стабільності і передбачуваності',
                    en: 'Prefer stability and predictability',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Готовий швидко адаптуватися',
                    en: 'Ready to adapt quickly',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Що для вас важливіше у вирішенні робочих завдань?',
            en: 'What is more important to you when solving work tasks?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Об’єктивність і логіка',
                    en: 'Objectivity and logic',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Гармонія і врахування емоцій',
                    en: 'Harmony and consideration of emotions',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Як ви зазвичай починаєте роботу над новим завданням?',
            en: 'How do you usually start working on a new task?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Збираю детальну інформацію і факти',
                    en: 'Gather detailed information and facts',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Шукаю загальну ідею і концепцію',
                    en: 'Look for the overall idea and concept',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Як ви відчуваєте себе у великих групах на роботі?',
            en: 'How do you feel in large groups at work?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Відкрито і активно взаємодію',
                    en: 'Openly and actively interact',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Віддаю перевагу спостерігати і слухати',
                    en: 'Prefer to observe and listen',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Який стиль керівництва для вас ефективніший?',
            en: 'Which leadership style is more effective for you?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Чіткий, з акцентом на правила і результати',
                    en: 'Clear, focusing on rules and results',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Підтримуючий, орієнтований на людей',
                    en: 'Supportive, people-oriented',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Що для вас важливіше у виборі професії?',
            en: 'What is more important for you in choosing a profession?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Чіткий план кар’єрного розвитку',
                    en: 'Clear career development plan',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Гнучкість і можливість змінювати напрямок',
                    en: 'Flexibility and possibility to change direction',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Як ви приймаєте рішення в складних ситуаціях?',
            en: 'How do you make decisions in difficult situations?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Аналізую факти і логіку',
                    en: 'Analyze facts and logic',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Прислухаюся до власних і чужих почуттів',
                    en: 'Listen to own and others’ feelings',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Що вас більше мотивує на роботі?',
            en: 'What motivates you more at work?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Спілкування та взаємодія з людьми',
                    en: 'Communication and interaction with people',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Можливість зосередитися і працювати самостійно',
                    en: 'Opportunity to focus and work independently',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви оцінюєте важливість деталей у вашій роботі?',
            en: 'How do you assess the importance of details in your work?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Велике значення мають деталі',
                    en: 'Details matter a lot',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Більше уваги приділяю загальній картині',
                    en: 'I pay more attention to the big picture',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Як ви волієте отримувати нову інформацію?',
            en: 'How do you prefer to receive new information?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Конкретно і практично',
                    en: 'Concrete and practical',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Теоретично і концептуально',
                    en: 'Theoretically and conceptually',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
            ],
        },
        {
            uk: 'Що вам більше подобається у способі організації роботи?',
            en: 'What do you prefer more in work organization?',
            options: [
                {
                    dimension: 'J',
                    uk: 'Планування і порядок',
                    en: 'Planning and order',
                    description_uk: 'Судження',
                    description_en: 'Judging',
                },
                {
                    dimension: 'P',
                    uk: 'Гнучкість і свобода',
                    en: 'Flexibility and freedom',
                    description_uk: 'Сприйняття',
                    description_en: 'Perceiving',
                },
            ],
        },
        {
            uk: 'Як ви ставитесь до роботи з новими ідеями?',
            en: 'How do you feel about working with new ideas?',
            options: [
                {
                    dimension: 'N',
                    uk: 'Захоплено і з інтересом',
                    en: 'Enthusiastically and with interest',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                },
                {
                    dimension: 'S',
                    uk: 'Обережно і з перевіркою',
                    en: 'Carefully and with verification',
                    description_uk: 'Сенсорика',
                    description_en: 'Sensing',
                },
            ],
        },
        {
            uk: 'Як ви підходите до вирішення конфліктів на роботі?',
            en: 'How do you approach resolving conflicts at work?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Обговорюю логічно і раціонально',
                    en: 'Discuss logically and rationally',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Шукаю компроміс і розуміння',
                    en: 'Seek compromise and understanding',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                },
            ],
        },
        {
            uk: 'Що для вас важливіше в колективі?',
            en: 'What is more important for you in a team?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Активна взаємодія і спілкування',
                    en: 'Active interaction and communication',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Можливість працювати спокійно і зосереджено',
                    en: 'Opportunity to work quietly and focused',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви відчуваєте себе після насиченого робочого дня?',
            en: 'How do you feel after a busy workday?',
            options: [
                {
                    dimension: 'I',
                    uk: 'Потребую часу на відновлення наодинці',
                    en: 'Need time to recharge alone',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
                {
                    dimension: 'E',
                    uk: 'Відчуваю прилив енергії від спілкування',
                    en: 'Feel energized by socializing',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
            ],
        },
        {
            uk: 'Коли ви працюєте над проєктом, що для вас важливіше?',
            en: 'When working on a project, what matters more to you?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Факти та деталі',
                    en: 'Facts and details',
                    description_uk: 'Сприйняття',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Ідеї та можливості',
                    en: 'Ideas and possibilities',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                }
            ],
        },
        {
            uk: 'Як ви зазвичай приймаєте рішення у складних ситуаціях?',
            en: 'How do you usually make decisions in difficult situations?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Опираюся на минулий досвід',
                    en: 'Rely on past experience',
                    description_uk: 'Сприйняття',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Шукаю нові підходи',
                    en: 'Look for new approaches',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                }
            ],
        },
        {
            uk: 'Що ви більше цінуєте у професійній діяльності?',
            en: 'What do you value more in your professional work?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Конкретність та практичність',
                    en: 'Concreteness and practicality',
                    description_uk: 'Сприйняття',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Інновації та оригінальність',
                    en: 'Innovation and originality',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                }
            ],
        },
        {
            uk: 'Як ви ставитесь до деталей у роботі?',
            en: 'How do you feel about details in your work?',
            options: [
                {
                    dimension: 'S',
                    uk: 'Важливо звертати увагу на дрібниці',
                    en: 'It’s important to pay attention to details',
                    description_uk: 'Сприйняття',
                    description_en: 'Sensing',
                },
                {
                    dimension: 'N',
                    uk: 'Краще дивитися на загальну картину',
                    en: 'Better to see the big picture',
                    description_uk: 'Інтуїція',
                    description_en: 'Intuition',
                }
            ],
        },
        {
            uk: 'Що для вас важливіше при оцінці ідеї?',
            en: 'What matters more to you when evaluating an idea?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Об’єктивність і логіка',
                    en: 'Objectivity and logic',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Як це вплине на людей',
                    en: 'How it will affect people',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                }
            ],
        },
        {
            uk: 'Як ви зазвичай реагуєте на критику?',
            en: 'How do you usually respond to criticism?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Аналізую і шукаю логічне пояснення',
                    en: 'Analyze and look for logical explanation',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Враховую емоції та намагаюся зрозуміти почуття іншого',
                    en: 'Consider emotions and try to understand feelings of others',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                }
            ],
        },
        {
            uk: 'Що для вас важливіше при прийнятті рішення?',
            en: 'What is more important to you when making a decision?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Об’єктивні факти',
                    en: 'Objective facts',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Почуття та цінності',
                    en: 'Feelings and values',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                }
            ],
        },
        {
            uk: 'Як ви вирішуєте конфлікти на роботі?',
            en: 'How do you resolve conflicts at work?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Обговорюю проблему раціонально',
                    en: 'Discuss the problem rationally',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Стараюся зберегти добрі стосунки',
                    en: 'Try to maintain good relationships',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                }
            ],
        },
        {
            uk: 'Як ви відчуваєте себе у ролі керівника?',
            en: 'How do you feel in a leadership role?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Приймаю рішення на основі логіки',
                    en: 'Make decisions based on logic',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Піклуюся про команду і її емоції',
                    en: 'Care about the team and their emotions',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                }
            ],
        },
        {
            uk: 'Що вам важливіше у професійному середовищі?',
            en: 'What is more important to you in a professional environment?',
            options: [
                {
                    dimension: 'T',
                    uk: 'Принципи та стандарти',
                    en: 'Principles and standards',
                    description_uk: 'Мислення',
                    description_en: 'Thinking',
                },
                {
                    dimension: 'F',
                    uk: 'Підтримка і співчуття',
                    en: 'Support and empathy',
                    description_uk: 'Відчуття',
                    description_en: 'Feeling',
                }
            ],
        },
        {
            uk: 'Як ви зазвичай відновлюєте енергію після напруженого робочого дня?',
            en: 'How do you usually recharge after a busy workday?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Спілкуючись з друзями або колегами',
                    en: 'Socializing with friends or colleagues',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Проводячи час на самоті, у спокої',
                    en: 'Spending time alone, in quiet',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        },
        {
            uk: 'Як ви зазвичай приймаєте рішення у командній роботі?',
            en: 'How do you usually make decisions in team work?',
            options: [
                {
                    dimension: 'E',
                    uk: 'Обговорюю і шукаю підтримку серед інших',
                    en: 'Discuss and seek support from others',
                    description_uk: 'Екстраверсія',
                    description_en: 'Extraversion',
                },
                {
                    dimension: 'I',
                    uk: 'Обмірковую все самостійно перед обговоренням',
                    en: 'Think through independently before discussing',
                    description_uk: 'Інтроверсія',
                    description_en: 'Introversion',
                },
            ],
        }
    ];

    const countByDimension = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };


    questions.forEach(q => {
        q.options.forEach(option => {
            countByDimension[option.dimension]++;
        });
    });

    const EI = countByDimension.E + countByDimension.I;
    const SN = countByDimension.S + countByDimension.N;
    const TF = countByDimension.T + countByDimension.F;
    const JP = countByDimension.J + countByDimension.P;

    console.log('E/I:', EI); // має бути 50
    console.log('S/N:', SN); // має бути 50
    console.log('T/F:', TF); // має бути 50
    console.log('J/P:', JP); // має бути 50

    const countQuestionsByPair = { EI: 0, SN: 0, TF: 0, JP: 0 };

    questions.forEach(q => {
        const dims = q.options.map(o => o.dimension);
        // Беремо будь-який dimension і дивимось до якої пари він належить
        const d = dims[0];
        if (d === 'E' || d === 'I') countQuestionsByPair.EI++;
        else if (d === 'S' || d === 'N') countQuestionsByPair.SN++;
        else if (d === 'T' || d === 'F') countQuestionsByPair.TF++;
        else if (d === 'J' || d === 'P') countQuestionsByPair.JP++;
    });

    console.log(countQuestionsByPair);

    console.log(countByDimension);

    for (const q of questions) {
        const question = await questionRepo.save({
            id: uuidv4(),
            test,
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

        for (const opt of q.options) {
            const option = await optionRepo.save({
                id: uuidv4(),
                question,
                dimension: opt.dimension,
                created_at: new Date(),
            });

            await optionTransRepo.save([
                {
                    id: uuidv4(),
                    option,
                    locale: 'uk',
                    text: opt.uk,
                    description: opt.description_uk,
                },
                {
                    id: uuidv4(),
                    option,
                    locale: 'en',
                    text: opt.en,
                    description: opt.description_en,
                },
            ]);
        }
    }

    console.log('Новий MBTI тест успішно створено!');
}
