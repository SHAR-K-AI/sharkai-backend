// data-source.ts
import {DataSource} from 'typeorm';
import {Profession} from "./src/entities/profession.entity";

import {CreateProfessions1746134222680} from "./migrations/1746134222680-CreateProfessions";
import {CreateRolesTable1746472423946} from "./migrations/1746472423946-CreateRolesTable";
import {CreateUsersTable1746473314580} from "./migrations/1746473314580-CreateUsersTable";
import {IscoCategory} from "./src/entities/isco-category.entity";
import {CreateTestsStructure1746719367060} from "./migrations/1746719367060-CreateTestsStructure";
import {CreateCareerPaths1746730462448} from "./migrations/1746730462448-CreateCareerPaths";
import {CreateCareerCategory1747084538375} from "./migrations/1747084538375-CreateCareerCategory";
import {Category} from "./src/entities/career-category.entity";
import {Test} from './src/entities/test.entity';
import {TestQuestion} from "./src/entities/test-question.entity";
import {TestAnswer} from "./src/entities/test-answer.entity";
import {TestLogic} from "./src/entities/test-logic.entity";
import {User} from "./src/entities/user.entity";
import {Role} from "./src/entities/roles.entity";
import {ProfessionCategory} from "./src/entities/profession-category.entity";
import {CreateRiasecTestAndQuestions1747246746111} from "./migrations/1747246746111-CreateRiasecTestAndQuestions";
import {RiasecTest} from "./src/entities/riasec-test.entity";
import {RiasecQuestion} from "./src/entities/riasec-question.entity";
import {CreateMbtiTest1747303830951} from "./migrations/1747303830951-CreateMbtiTest";
import {MbtiTest} from "./src/entities/mbti-test.entity";
import {MbtiQuestion} from "./src/entities/mbti-question.entity";
import {CreateDiscTestAndQuestions1747313369584} from "./migrations/1747313369584-CreateDiscTestAndQuestions";
import {DiscTest} from "./src/entities/disc-test.entity";
import {DiscQuestion} from "./src/entities/disc-question.entity";
import {CreateGallupTestAndQuestions1747324557271} from "./migrations/1747324557271-CreateGallupTestAndQuestions";
import {GallupTest} from "./src/entities/gallup-test.entity";
import {GallupQuestion} from "./src/entities/gallup-question.entity";
import {CreateBigFiveTest1747337484999} from "./migrations/1747337484999-CreateBigFiveTest";
import {BigFiveTest} from "./src/entities/big-five-test.entity";
import {BigFiveQuestion} from "./src/entities/big-five-question.entity";
import {CreateAsvabTest1747385013673} from "./migrations/1747385013673-CreateAsvabTest";
import {AsvabTest} from "./src/entities/asvab-test.entity";
import {AsvabQuestion} from "./src/entities/asvab-question.entity";
import {AsvabAnswer} from "./src/entities/asvab-answer.entity";
import {CreateUserMbtiResults1747390076056} from "./migrations/1747390076056-CreateUserMbtiResults";
import {UserMbtiResult} from "./src/entities/user-mbti-result.entity";
import {MbtiTestTranslation} from "./src/entities/mbti-test-translation.entity";
import {MbtiQuestionTranslation} from "./src/entities/mbti-question-translation.entity";
import {CreateProfessionCategories1747495847295} from "./src/migrations/1747495847295-CreateProfessionCategories";
import {CreateProfessions1747495954719} from "./src/migrations/1747495954719-CreateProfessions";
import {CreateSkills1747506269920} from "./src/migrations/1747506269920-CreateSkills";
import {CreateCourses1747506638598} from "./src/migrations/1747506638598-CreateCourses";
import {CreateProfessionRelations1747506708492} from "./src/migrations/1747506708492-CreateProfessionRelations";
import {CreateUsersProfessions1747507509155} from "./src/migrations/1747507509155-CreateUsersProfessions";
import {CreateUsersSkills1747507549607} from "./src/migrations/1747507549607-CreateUsersSkills";
import {CreateUsersCourses1747507580098} from "./src/migrations/1747507580098-CreateUsersCourses";
import {CreateCareerForms1747583409812} from "./src/migrations/1747583409812-CreateCareerForms";
import {Course} from "./src/entities/course.entity";
import {Skill} from "./src/entities/skill.entity";
import {ProfessionCategoryTranslation} from "./src/entities/profession-category-translation.entity";
import {ProfessionTranslation} from "./src/entities/profession-translation.entity";
import {SkillTranslation} from "./src/entities/skill-translation.entity";
import {CourseTranslation} from "./src/entities/course-translation.entity";
import {UserCourse} from "./src/entities/users-courses.entity";

export const AppDataSource = new DataSource({
    type: 'mysql', // Тип бази даних, змінено на MySQL
    host: 'localhost',
    port: 3306, // Порт за замовчуванням для MySQL
    username: 'shark',
    password: '11111111',
    database: 'shark',
    entities: [
        // Test,
        // TestAnswer,
        // TestQuestion,
        // TestLogic,
        User,
        Role,

        Profession,
        ProfessionTranslation,

        ProfessionCategory,
        ProfessionCategoryTranslation,

        Skill,
        SkillTranslation,

        Course,
        CourseTranslation,

        UserCourse,
        // IscoCategory,
        // Profession,
        // Category,
        // ProfessionCategory,
        // RiasecTest,
        // RiasecQuestion,

        // DiscTest,
        // DiscQuestion,
        // GallupTest,
        // GallupQuestion,
        // BigFiveTest,
        // BigFiveQuestion,
        // AsvabTest,
        // AsvabQuestion,
        // AsvabAnswer,

        MbtiTest,
        MbtiQuestion,
        UserMbtiResult,
        MbtiTestTranslation,
        MbtiQuestionTranslation,
    ], // Додано всі сутності
    synchronize: false, // Вимкнути автоматичне синхронізування
    migrations: [
        // CreateProfessions1746134222680,
        CreateRolesTable1746472423946,
        CreateUsersTable1746473314580,
        CreateProfessionCategories1747495847295,
        CreateProfessions1747495954719,
        CreateSkills1747506269920,
        CreateCourses1747506638598,
        CreateProfessionRelations1747506708492,
        CreateUsersProfessions1747507509155,
        CreateUsersSkills1747507549607,
        CreateUsersCourses1747507580098,
        CreateCareerForms1747583409812,
        // CreateTestsStructure1746719367060,
        // CreateCareerPaths1746730462448,
        // CreateCareerCategory1747084538375,
        // CreateProfessionCategories1747225128827,
        // CreateRiasecTestAndQuestions1747246746111,
        CreateMbtiTest1747303830951,
        // CreateDiscTestAndQuestions1747313369584,
        // CreateGallupTestAndQuestions1747324557271,
        // CreateBigFiveTest1747337484999,
        // CreateAsvabTest1747385013673,
        CreateUserMbtiResults1747390076056
    ], // Шлях до міграцій
});