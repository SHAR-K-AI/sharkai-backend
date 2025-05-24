import { AppDataSource } from '../data-source';
import { LearningPath } from '../src/entities/learning-path.entity';
import { LearningPathDay } from '../src/entities/learning-path-day.entity';
import { Achievement } from '../src/entities/achievement.entity';
import { v4 as uuidv4 } from 'uuid';

export async function createLearningPathSeed() {
    const learningPathRepo = AppDataSource.getRepository(LearningPath);
    const dayRepo = AppDataSource.getRepository(LearningPathDay);
    const achievementRepo = AppDataSource.getRepository(Achievement);

    const userId = 1; // 🔥 Замінити на ID існуючого користувача в базі

    const startDate = new Date(2025, 5, 1); // 1 червня
    const endDate = new Date(2025, 5, 30); // 30 червня

    const learningPath = await learningPathRepo.save({
        id: uuidv4(),
        user_id: userId,
        title: 'Frontend Developer: 30-Day Learning Plan',
        description: 'Comprehensive 30-day plan to master frontend development skills',
        start_date: startDate.toISOString().split('T')[0],
        end_date: endDate.toISOString().split('T')[0],
        created_at: new Date(),
        updated_at: new Date(),
    });

    const dayTopics = [
        'HTML Basics',
        'CSS Fundamentals',
        'Responsive Design',
        'CSS Flexbox & Grid',
        'JavaScript Basics',
        'DOM Manipulation',
        'JavaScript ES6+ Features',
        'Asynchronous JavaScript (Promises, async/await)',
        'Version Control with Git',
        'Working with GitHub',
        'Package Managers (npm, yarn)',
        'Build Tools (Webpack, Babel)',
        'CSS Preprocessors (SASS, LESS)',
        'JavaScript Frameworks Overview',
        'React.js Basics',
        'React Components & Props',
        'React State & Lifecycle',
        'React Hooks',
        'Routing in React (React Router)',
        'State Management (Redux, Context API)',
        'Testing Basics (Jest, React Testing Library)',
        'Accessibility (a11y) Principles',
        'Performance Optimization',
        'Progressive Web Apps (PWAs)',
        'TypeScript Introduction',
        'API Integration (REST, Fetch, Axios)',
        'Authentication & Authorization',
        'Deployment (Netlify, Vercel)',
        'Portfolio Project Development',
        'Final Project Presentation & Review',
    ];

    for (let i = 0; i < dayTopics.length; i++) {
        const achievement = await achievementRepo.save({
            id: uuidv4(),
            title: `Day ${i + 1}: ${dayTopics[i]}`,
            description: `Completed ${dayTopics[i]} module.`,
            icon: '🏆',
            created_at: new Date(),
            updated_at: new Date(),
        });

        const date = new Date(2025, 5, i + 1); // Місяць 5 = червень

        await dayRepo.save({
            id: uuidv4(),
            learning_path_id: learningPath.id,
            day_number: i + 1,
            date: date.toISOString().split('T')[0],
            task_type: 'lesson',
            test_id: null,
            achievement_id: achievement.id,
            created_at: new Date(),
            updated_at: new Date(),
        });
    }

    console.log('✅ Створено оновлений 30-денний навчальний шлях з досягненнями!');
}
