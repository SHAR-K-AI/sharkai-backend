import { AppDataSource } from '../data-source';
import { Skill } from '../src/entities/skill.entity';
import { SkillTranslation } from '../src/entities/skill-translation.entity';

export async function createSkillsSeed() {
    const skillRepo = AppDataSource.getRepository(Skill);
    const translationRepo = AppDataSource.getRepository(SkillTranslation);

    const skillsData = [
        { category: 'Hard Skills', en: 'Python', uk: 'Python' },
        { category: 'Hard Skills', en: 'JavaScript', uk: 'JavaScript' },
        { category: 'Hard Skills', en: 'TypeScript', uk: 'TypeScript' },
        { category: 'Hard Skills', en: 'SQL', uk: 'SQL' },
        { category: 'Hard Skills', en: 'Java', uk: 'Java' },
        { category: 'Hard Skills', en: 'C++', uk: 'C++' },
        { category: 'Hard Skills', en: 'C#', uk: 'C#' },
        { category: 'Hard Skills', en: 'Go', uk: 'Go' },
        { category: 'Hard Skills', en: 'Rust', uk: 'Rust' },
        { category: 'Hard Skills', en: 'Data Analysis', uk: 'Аналіз даних' },
        { category: 'Hard Skills', en: 'Data Visualization', uk: 'Візуалізація даних' },
        { category: 'Hard Skills', en: 'Machine Learning', uk: 'Машинне навчання' },
        { category: 'Hard Skills', en: 'Deep Learning', uk: 'Глибинне навчання' },
        { category: 'Hard Skills', en: 'Big Data', uk: 'Великі дані' },
        { category: 'Hard Skills', en: 'Cloud Computing', uk: 'Хмарні обчислення' },
        { category: 'Hard Skills', en: 'Cybersecurity', uk: 'Кібербезпека' },
        { category: 'Hard Skills', en: 'Blockchain', uk: 'Блокчейн' },
        { category: 'Hard Skills', en: 'DevOps', uk: 'DevOps' },
        { category: 'Hard Skills', en: 'UI/UX Design', uk: 'UI/UX дизайн' },
        { category: 'Hard Skills', en: 'Graphic Design', uk: 'Графічний дизайн' },

        { category: 'Soft Skills', en: 'Communication', uk: 'Комунікація' },
        { category: 'Soft Skills', en: 'Teamwork', uk: 'Командна робота' },
        { category: 'Soft Skills', en: 'Time Management', uk: 'Управління часом' },
        { category: 'Soft Skills', en: 'Critical Thinking', uk: 'Критичне мислення' },
        { category: 'Soft Skills', en: 'Problem Solving', uk: 'Розв’язання проблем' },
        { category: 'Soft Skills', en: 'Adaptability', uk: 'Адаптивність' },
        { category: 'Soft Skills', en: 'Creativity', uk: 'Креативність' },
        { category: 'Soft Skills', en: 'Leadership', uk: 'Лідерство' },
        { category: 'Soft Skills', en: 'Emotional Intelligence', uk: 'Емоційний інтелект' },
        { category: 'Soft Skills', en: 'Conflict Resolution', uk: 'Вирішення конфліктів' },

        { category: 'Languages', en: 'English', uk: 'Англійська' },
        { category: 'Languages', en: 'Ukrainian', uk: 'Українська' },
        { category: 'Languages', en: 'German', uk: 'Німецька' },
        { category: 'Languages', en: 'Spanish', uk: 'Іспанська' },
        { category: 'Languages', en: 'French', uk: 'Французька' },

        { category: 'Business', en: 'Project Management', uk: 'Управління проєктами' },
        { category: 'Business', en: 'Product Management', uk: 'Управління продуктом' },
        { category: 'Business', en: 'Digital Marketing', uk: 'Цифровий маркетинг' },
        { category: 'Business', en: 'SEO', uk: 'SEO (оптимізація для пошукових систем)' },
        { category: 'Business', en: 'Sales', uk: 'Продажі' },
        { category: 'Business', en: 'Negotiation', uk: 'Переговори' },

        { category: 'Other', en: 'Public Speaking', uk: 'Публічні виступи' },
        { category: 'Other', en: 'Writing', uk: 'Письмо' },
        { category: 'Other', en: 'Research', uk: 'Дослідження' },
        { category: 'Other', en: 'Teaching', uk: 'Навчання' },
        { category: 'Other', en: 'Mentoring', uk: 'Наставництво' },
    ];

    for (const { category, en, uk } of skillsData) {
        const skill = await skillRepo.save({
            category,
            created_at: new Date(),
            updated_at: new Date(),
        });

        await translationRepo.save([
            {
                skill,
                languageCode: 'en',
                field: 'name',
                value: en,
            },
            {
                skill,
                languageCode: 'uk',
                field: 'name',
                value: uk,
            },
        ]);
    }

    console.log('✅ 50 популярних скілів з перекладами створено!');
}
