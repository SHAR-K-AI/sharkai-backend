import { AppDataSource } from '../data-source';
import { EducationLevel } from '../src/entities/education-level.entity';
import { EducationLevelTranslation } from '../src/entities/education-level-translation.entity';

export async function createEducationLevelsSeed() {
    const educationLevelRepo = AppDataSource.getRepository(EducationLevel);
    const translationRepo = AppDataSource.getRepository(EducationLevelTranslation);

    const educationLevelsData = [
        {
            code: 'less_than_primary',
            isced_level: 0,
            translations: [
                { languageCode: 'en', field: 'name', value: 'Less than primary education' },
                { languageCode: 'uk', field: 'name', value: 'Менше початкової освіти' },
            ],
        },
        {
            code: 'primary',
            isced_level: 1,
            translations: [
                { languageCode: 'en', field: 'name', value: 'Primary education' },
                { languageCode: 'uk', field: 'name', value: 'Початкова освіта' },
            ],
        },
        {
            code: 'lower_secondary',
            isced_level: 2,
            translations: [
                { languageCode: 'en', field: 'name', value: 'Lower secondary education' },
                { languageCode: 'uk', field: 'name', value: 'Нижча середня освіта' },
            ],
        },
        {
            code: 'upper_secondary',
            isced_level: 3,
            translations: [
                { languageCode: 'en', field: 'name', value: 'Upper secondary education' },
                { languageCode: 'uk', field: 'name', value: 'Вища середня освіта' },
            ],
        },
        {
            code: 'post_secondary_non_tertiary',
            isced_level: 4,
            translations: [
                { languageCode: 'en', field: 'name', value: 'Post-secondary non-tertiary education' },
                { languageCode: 'uk', field: 'name', value: 'Післясередня освіта (не вища)' },
            ],
        },
        {
            code: 'associate_degree',
            isced_level: 5,
            translations: [
                { languageCode: 'en', field: 'name', value: 'Associate Degree' },
                { languageCode: 'uk', field: 'name', value: 'Молодший спеціаліст' },
            ],
        },
        {
            code: 'bachelor',
            isced_level: 6,
            translations: [
                { languageCode: 'en', field: 'name', value: "Bachelor's Degree" },
                { languageCode: 'uk', field: 'name', value: "Бакалавр" },
            ],
        },
        {
            code: 'master',
            isced_level: 7,
            translations: [
                { languageCode: 'en', field: 'name', value: "Master's Degree" },
                { languageCode: 'uk', field: 'name', value: "Магістр" },
            ],
        },
        {
            code: 'doctoral',
            isced_level: 8,
            translations: [
                { languageCode: 'en', field: 'name', value: "Doctoral Degree" },
                { languageCode: 'uk', field: 'name', value: "Доктор наук" },
            ],
        },
        {
            code: 'other',
            isced_level: null,
            translations: [
                { languageCode: 'en', field: 'name', value: 'Other' },
                { languageCode: 'uk', field: 'name', value: 'Інше' },
            ],
        },
    ];

    for (const levelData of educationLevelsData) {
        const level = await educationLevelRepo.save({
            code: levelData.code,
            isced_level: levelData.isced_level,
            created_at: new Date(),
            updated_at: new Date(),
        });

        const translations = levelData.translations.map(t => ({
            level,
            languageCode: t.languageCode,
            field: t.field,
            value: t.value,
        }));

        await translationRepo.save(translations);
    }

    console.log('✅ Повний сід рівнів освіти створено!');
}
