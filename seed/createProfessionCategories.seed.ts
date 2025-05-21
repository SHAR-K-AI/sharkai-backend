import { AppDataSource } from '../data-source';
import categories from "./data/profession-categories";
import { ProfessionCategory } from '../src/entities/profession-category.entity';
import { ProfessionCategoryTranslation } from '../src/entities/profession-category-translation.entity';

export async function createProfessionCategoriesSeed() {
    const categoryRepo = AppDataSource.getRepository(ProfessionCategory);
    const translationRepo = AppDataSource.getRepository(ProfessionCategoryTranslation);


    for (const cat of categories) {
        const category = await categoryRepo.save({
            id: undefined, // auto-increment
            level: cat.level,
            code: cat.code,
            created_at: new Date(),
            updated_at: new Date(),
        });

        await translationRepo.save([
            {
                id: undefined,
                category_id: category.id,
                languageCode: 'en',
                field: 'name',
                value: cat.translations.en.name,
            },
            {
                id: undefined,
                category_id: category.id,
                languageCode: 'en',
                field: 'definition',
                value: cat.translations.en.definition,
            },
            {
                id: undefined,
                category_id: category.id,
                languageCode: 'en',
                field: 'tasks_include',
                value: cat.translations.en.tasks_include,
            },
            {
                id: undefined,
                category_id: category.id,
                languageCode: 'en',
                field: 'included_occupations',
                value: cat.translations.en.included_occupations,
            },
            {
                id: undefined,
                category_id: category.id,
                languageCode: 'en',
                field: 'excluded_occupations',
                value: cat.translations.en.excluded_occupations,
            },
            {
                id: undefined,
                category_id: category.id,
                languageCode: 'en',
                field: 'notes',
                value: cat.translations.en.notes,
            },
        ]);
    }

    console.log('Категорії професій з перекладами успішно створені!');
}
