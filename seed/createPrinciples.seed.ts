import { AppDataSource } from '../data-source';
import { Principle } from '../src/entities/principle.entity';
import { PrincipleTranslation } from '../src/entities/principle-translation.entity';

export async function createPrinciplesSeed() {
    const principleRepo = AppDataSource.getRepository(Principle);
    const translationRepo = AppDataSource.getRepository(PrincipleTranslation);

    const principlesData = [
        { category: 'Personal Growth', en: 'Integrity', uk: 'Цілісність' },
        { category: 'Personal Growth', en: 'Honesty', uk: 'Чесність' },
        { category: 'Personal Growth', en: 'Responsibility', uk: 'Відповідальність' },
        { category: 'Personal Growth', en: 'Discipline', uk: 'Дисципліна' },
        { category: 'Personal Growth', en: 'Perseverance', uk: 'Наполегливість' },

        { category: 'Social', en: 'Respect', uk: 'Повага' },
        { category: 'Social', en: 'Empathy', uk: 'Співчуття' },
        { category: 'Social', en: 'Justice', uk: 'Справедливість' },
        { category: 'Social', en: 'Tolerance', uk: 'Толерантність' },
        { category: 'Social', en: 'Kindness', uk: 'Доброзичливість' },

        { category: 'Work Ethics', en: 'Hard Work', uk: 'Наполеглива праця' },
        { category: 'Work Ethics', en: 'Commitment', uk: 'Відданість' },
        { category: 'Work Ethics', en: 'Creativity', uk: 'Креативність' },
        { category: 'Work Ethics', en: 'Innovation', uk: 'Інновації' },
        { category: 'Work Ethics', en: 'Collaboration', uk: 'Співпраця' },

        { category: 'Lifestyle', en: 'Health', uk: 'Здоров’я' },
        { category: 'Lifestyle', en: 'Balance', uk: 'Баланс' },
        { category: 'Lifestyle', en: 'Freedom', uk: 'Свобода' },
        { category: 'Lifestyle', en: 'Adventure', uk: 'Пригода' },
        { category: 'Lifestyle', en: 'Simplicity', uk: 'Простота' },

        { category: 'Spiritual', en: 'Faith', uk: 'Віра' },
        { category: 'Spiritual', en: 'Gratitude', uk: 'Вдячність' },
        { category: 'Spiritual', en: 'Humility', uk: 'Скромність' },
        { category: 'Spiritual', en: 'Peace', uk: 'Спокій' },
        { category: 'Spiritual', en: 'Compassion', uk: 'Співчуття' },

        { category: 'Leadership', en: 'Vision', uk: 'Бачення' },
        { category: 'Leadership', en: 'Accountability', uk: 'Відповідальність' },
        { category: 'Leadership', en: 'Inspiration', uk: 'Натхнення' },
        { category: 'Leadership', en: 'Courage', uk: 'Сміливість' },
        { category: 'Leadership', en: 'Adaptability', uk: 'Адаптивність' },

        { category: 'Learning', en: 'Curiosity', uk: 'Цікавість' },
        { category: 'Learning', en: 'Open-mindedness', uk: 'Відкритість' },
        { category: 'Learning', en: 'Critical Thinking', uk: 'Критичне мислення' },
        { category: 'Learning', en: 'Self-awareness', uk: 'Самоусвідомлення' },
        { category: 'Learning', en: 'Patience', uk: 'Терпіння' },

        { category: 'Environmental', en: 'Sustainability', uk: 'Сталий розвиток' },
        { category: 'Environmental', en: 'Respect for Nature', uk: 'Повага до природи' },
        { category: 'Environmental', en: 'Conservation', uk: 'Збереження' },
        { category: 'Environmental', en: 'Responsibility to Future', uk: 'Відповідальність перед майбутнім' },
        { category: 'Environmental', en: 'Minimalism', uk: 'Мінімалізм' },

        { category: 'Community', en: 'Helping Others', uk: 'Допомога іншим' },
        { category: 'Community', en: 'Teamwork', uk: 'Командна робота' },
        { category: 'Community', en: 'Trust', uk: 'Довіра' },
        { category: 'Community', en: 'Generosity', uk: 'Щедрість' },
        { category: 'Community', en: 'Fairness', uk: 'Чесність' },
    ];

    for (const { category, en, uk } of principlesData) {
        const principle = await principleRepo.save({
            category,
            created_at: new Date(),
            updated_at: new Date(),
        });

        await translationRepo.save([
            {
                principle,
                languageCode: 'en',
                field: 'name',
                value: en,
            },
            {
                principle,
                languageCode: 'uk',
                field: 'name',
                value: uk,
            },
        ]);
    }

    console.log('✅ 50 принципів (цінностей) з перекладами успішно створено!');
}
