import { AppDataSource } from '../data-source';
import { LearningPath } from '../src/entities/learning-path.entity';
import { LearningPathDay } from '../src/entities/learning-path-day.entity';
import { Achievement } from '../src/entities/achievement.entity';
import { v4 as uuidv4 } from 'uuid';

export async function createLearningPathSeed() {
    const learningPathRepo = AppDataSource.getRepository(LearningPath);
    const dayRepo = AppDataSource.getRepository(LearningPathDay);
    const achievementRepo = AppDataSource.getRepository(Achievement);

    const learningPathTranslationRepo = AppDataSource.getRepository('learning_path_translations');
    const dayTranslationRepo = AppDataSource.getRepository('learning_path_day_translations');
    const achievementTranslationRepo = AppDataSource.getRepository('achievement_translations');

    const startDate = new Date(2025, 5, 1); // 1 червня
    const endDate = new Date(2025, 5, 30); // 30 червня

    const learningPathId = uuidv4();

    await learningPathRepo.save({
        id: learningPathId,
        user: { id: 1 },
        startDate: startDate.toISOString().split('T')[0],
        endDate: endDate.toISOString().split('T')[0],
        created_at: new Date(),
        updated_at: new Date(),
    });

    await learningPathTranslationRepo.save({
        learning_path_id: learningPathId,
        language: 'en',
        title: 'Frontend Developer: 30-Day Learning Plan',
        description: 'Comprehensive 30-day plan to master frontend development skills.',
    });

    const dayTopics: { title: string; url: string }[] = [
        { title: 'HTML Basics', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
        { title: 'CSS Fundamentals', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
        { title: 'Responsive Design', url: 'https://web.dev/learn/design/responsive/' },
        { title: 'CSS Flexbox & Grid', url: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/' },
        { title: 'JavaScript Basics', url: 'https://javascript.info/intro' },
        { title: 'DOM Manipulation', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model' },
        { title: 'JavaScript ES6+ Features', url: 'https://www.freecodecamp.org/news/es6-guide/' },
        { title: 'Asynchronous JavaScript (Promises, async/await)', url: 'https://javascript.info/async' },
        { title: 'Version Control with Git', url: 'https://git-scm.com/doc' },
        { title: 'Working with GitHub', url: 'https://docs.github.com/en' },
        { title: 'Package Managers (npm, yarn)', url: 'https://classic.yarnpkg.com/en/docs/' },
        { title: 'Build Tools (Webpack, Babel)', url: 'https://webpack.js.org/concepts/' },
        { title: 'CSS Preprocessors (SASS, LESS)', url: 'https://sass-lang.com/guide/' },
        { title: 'JavaScript Frameworks Overview', url: 'https://blog.bitsrc.io/javascript-frameworks-overview-2023' },
        { title: 'React.js Basics', url: 'https://react.dev/learn' },
        { title: 'React Components & Props', url: 'https://react.dev/learn/passing-props-to-a-component' },
        { title: 'React State & Lifecycle', url: 'https://reactjs.org/docs/state-and-lifecycle.html' },
        { title: 'React Hooks', url: 'https://reactjs.org/docs/hooks-intro.html' },
        { title: 'Routing in React (React Router)', url: 'https://reactrouter.com/en/main' },
        { title: 'State Management (Redux, Context API)', url: 'https://redux.js.org/introduction/getting-started' },
        { title: 'Testing Basics (Jest, React Testing Library)', url: 'https://testing-library.com/docs/react-testing-library/intro/' },
        { title: 'Accessibility (a11y) Principles', url: 'https://www.w3.org/WAI/fundamentals/accessibility-intro/' },
        { title: 'Performance Optimization', url: 'https://web.dev/learn/performance/' },
        { title: 'Progressive Web Apps (PWAs)', url: 'https://web.dev/progressive-web-apps/' },
        { title: 'TypeScript Introduction', url: 'https://www.typescriptlang.org/docs/' },
        { title: 'API Integration (REST, Fetch, Axios)', url: 'https://axios-http.com/docs/intro' },
        { title: 'Authentication & Authorization', url: 'https://developer.mozilla.org/en-US/docs/Web/Security/Authentication' },
        { title: 'Deployment (Netlify, Vercel)', url: 'https://vercel.com/docs' },
        { title: 'Portfolio Project Development', url: 'https://www.freecodecamp.org/news/how-to-build-a-developer-portfolio/' },
        { title: 'Final Project Presentation & Review', url: 'https://www.interviewcake.com/blog/software-engineer-portfolio' },
    ];

    for (let i = 0; i < dayTopics.length; i++) {
        const dayTopic = dayTopics[i];

        const achievementId = uuidv4();
        const achievement = await achievementRepo.save({
            id: achievementId,
            icon: '🏆',
            created_at: new Date(),
            updated_at: new Date(),
        });

        await achievementTranslationRepo.save({
            achievement_id: achievementId,
            language: 'en',
            title: `Day ${i + 1}: ${dayTopic.title}`,
            description: `Completed module on "${dayTopic.title}".`,
        });

        const dayId = uuidv4();
        const dayDate = new Date(2025, 5, i + 1); // Місяць 5 = червень

        await dayRepo.save({
            id: dayId,
            learning_path_id: learningPathId,
            day_number: i + 1,
            date: dayDate.toISOString().split('T')[0],
            task_type: 'lesson',
            url: dayTopic.url,
            test_id: null,
            achievement_id: achievementId,
            created_at: new Date(),
            updated_at: new Date(),
        });

        await dayTranslationRepo.save({
            learning_path_day_id: dayId,
            language: 'en',
            title: dayTopic.title,
            description: `Study topic: ${dayTopic.title}`,
        });
    }

    console.log('✅ Створено 30-денний навчальний план Frontend Developer з описами, досягненнями та посиланнями!');
}
