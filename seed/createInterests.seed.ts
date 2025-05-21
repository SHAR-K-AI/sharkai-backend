import { AppDataSource } from '../data-source';
import { Interest } from '../src/entities/interest.entity';
import { InterestTranslation } from '../src/entities/interest-translation.entity';

export async function createInterestsSeed() {
    const interestRepo = AppDataSource.getRepository(Interest);
    const translationRepo = AppDataSource.getRepository(InterestTranslation);

    const interestsData = [
        { category: 'Technology', en: 'Artificial Intelligence', uk: 'Штучний інтелект' },
        { category: 'Technology', en: 'Cybersecurity', uk: 'Кібербезпека' },
        { category: 'Technology', en: 'Blockchain', uk: 'Блокчейн' },
        { category: 'Technology', en: 'Web Development', uk: 'Веб-розробка' },
        { category: 'Technology', en: 'Game Development', uk: 'Розробка ігор' },
        { category: 'Technology', en: 'Mobile Development', uk: 'Мобільна розробка' },
        { category: 'Technology', en: 'Internet of Things', uk: 'Інтернет речей' },
        { category: 'Technology', en: 'Cloud Computing', uk: 'Хмарні обчислення' },
        { category: 'Technology', en: '3D Printing', uk: '3D-друк' },
        { category: 'Technology', en: 'Virtual Reality', uk: 'Віртуальна реальність' },

        { category: 'Science', en: 'Physics', uk: 'Фізика' },
        { category: 'Science', en: 'Chemistry', uk: 'Хімія' },
        { category: 'Science', en: 'Biology', uk: 'Біологія' },
        { category: 'Science', en: 'Astronomy', uk: 'Астрономія' },
        { category: 'Science', en: 'Environmental Science', uk: 'Екологія' },
        { category: 'Science', en: 'Mathematics', uk: 'Математика' },
        { category: 'Science', en: 'Geography', uk: 'Географія' },
        { category: 'Science', en: 'Robotics', uk: 'Робототехніка' },
        { category: 'Science', en: 'Neuroscience', uk: 'Нейронаука' },
        { category: 'Science', en: 'Genetics', uk: 'Генетика' },

        { category: 'Art & Culture', en: 'Painting', uk: 'Живопис' },
        { category: 'Art & Culture', en: 'Drawing', uk: 'Малювання' },
        { category: 'Art & Culture', en: 'Photography', uk: 'Фотографія' },
        { category: 'Art & Culture', en: 'Music', uk: 'Музика' },
        { category: 'Art & Culture', en: 'Dance', uk: 'Танці' },
        { category: 'Art & Culture', en: 'Theatre', uk: 'Театр' },
        { category: 'Art & Culture', en: 'Sculpture', uk: 'Скульптура' },
        { category: 'Art & Culture', en: 'Cinema', uk: 'Кіно' },
        { category: 'Art & Culture', en: 'Literature', uk: 'Література' },
        { category: 'Art & Culture', en: 'Calligraphy', uk: 'Каліграфія' },

        { category: 'Lifestyle', en: 'Fitness', uk: 'Фітнес' },
        { category: 'Lifestyle', en: 'Yoga', uk: 'Йога' },
        { category: 'Lifestyle', en: 'Meditation', uk: 'Медитація' },
        { category: 'Lifestyle', en: 'Cooking', uk: 'Кулінарія' },
        { category: 'Lifestyle', en: 'Traveling', uk: 'Подорожі' },
        { category: 'Lifestyle', en: 'Hiking', uk: 'Піші прогулянки' },
        { category: 'Lifestyle', en: 'Gardening', uk: 'Садівництво' },
        { category: 'Lifestyle', en: 'DIY', uk: 'Зроби сам' },
        { category: 'Lifestyle', en: 'Fashion', uk: 'Мода' },
        { category: 'Lifestyle', en: 'Interior Design', uk: 'Дизайн інтер’єру' },

        { category: 'Social', en: 'Volunteering', uk: 'Волонтерство' },
        { category: 'Social', en: 'Public Speaking', uk: 'Публічні виступи' },
        { category: 'Social', en: 'Debating', uk: 'Дебати' },
        { category: 'Social', en: 'Blogging', uk: 'Блогінг' },
        { category: 'Social', en: 'Podcasting', uk: 'Подкастинг' },
        { category: 'Social', en: 'Networking', uk: 'Нетворкінг' },
        { category: 'Social', en: 'Event Planning', uk: 'Організація подій' },
        { category: 'Social', en: 'Storytelling', uk: 'Сторітелінг' },
        { category: 'Social', en: 'Language Learning', uk: 'Вивчення мов' },
        { category: 'Social', en: 'Mentoring', uk: 'Наставництво' },
    ];

    for (const { category, en, uk } of interestsData) {
        const interest = await interestRepo.save({
            category,
            created_at: new Date(),
            updated_at: new Date(),
        });

        await translationRepo.save([
            {
                interest,
                languageCode: 'en',
                field: 'name',
                value: en,
            },
            {
                interest,
                languageCode: 'uk',
                field: 'name',
                value: uk,
            },
        ]);
    }

    console.log('✅ 50 інтересів з перекладами успішно створено!');
}
