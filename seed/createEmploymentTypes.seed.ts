import { AppDataSource } from '../data-source';
import {EmploymentType} from "../src/entities/employment-type.entity";
import {EmploymentTypeTranslation} from "../src/entities/employment-type-translation.entity";

export async function createEmploymentTypeSeed() {
    const valueRepo = AppDataSource.getRepository(EmploymentType);
    const translationRepo = AppDataSource.getRepository(EmploymentTypeTranslation);

    const valuesData = [
        {
            category: 'location',
            translations: [
                { languageCode: 'en', field: 'name', value: 'Office-Based' },
                { languageCode: 'uk', field: 'name', value: 'Офісна робота' },
            ],
        },
        {
            category: 'location',
            translations: [
                { languageCode: 'en', field: 'name', value: 'Remote Work' },
                { languageCode: 'uk', field: 'name', value: 'Віддалена робота' },
            ],
        },
        {
            category: 'location',
            translations: [
                { languageCode: 'en', field: 'name', value: 'Hybrid' },
                { languageCode: 'uk', field: 'name', value: 'Гібридна робота' },
            ],
        },
        {
            category: 'interaction',
            translations: [
                { languageCode: 'en', field: 'name', value: 'Team-Oriented' },
                { languageCode: 'uk', field: 'name', value: 'Командна робота' },
            ],
        },
        {
            category: 'interaction',
            translations: [
                { languageCode: 'en', field: 'name', value: 'Collaborative' },
                { languageCode: 'uk', field: 'name', value: 'Співпраця' },
            ],
        },
        {
            category: 'interaction',
            translations: [
                { languageCode: 'en', field: 'name', value: 'Independent' },
                { languageCode: 'uk', field: 'name', value: 'Самостійна робота' },
            ],
        },
        {
            category: 'pace',
            translations: [
                { languageCode: 'en', field: 'name', value: 'Fast-Paced' },
                { languageCode: 'uk', field: 'name', value: 'Швидкий темп' },
            ],
        },
        {
            category: 'culture',
            translations: [
                { languageCode: 'en', field: 'name', value: 'Creative' },
                { languageCode: 'uk', field: 'name', value: 'Креативне середовище' },
            ],
        },
        {
            category: 'organization',
            translations: [
                { languageCode: 'en', field: 'name', value: 'Structured' },
                { languageCode: 'uk', field: 'name', value: 'Структуроване середовище' },
            ],
        },
        {
            category: 'schedule',
            translations: [
                { languageCode: 'en', field: 'name', value: 'Flexible Schedule' },
                { languageCode: 'uk', field: 'name', value: 'Гнучкий графік' },
            ],
        },
    ];

    for (const valueData of valuesData) {
        const type = await valueRepo.save({
            category: valueData.category,
            created_at: new Date(),
            updated_at: new Date(),
        });

        const translations = valueData.translations.map(t => ({
            type,
            languageCode: t.languageCode,
            field: t.field,
            value: t.value,
        }));

        await translationRepo.save(translations);
    }

    console.log('✅ Сід робочих цінностей створено!');
}
