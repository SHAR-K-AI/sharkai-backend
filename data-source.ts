import {DataSource} from 'typeorm';
import {Profession} from "./src/entities/profession.entity";

import {CreateRolesTable1746472423946} from "./src/migrations/1746472423946-CreateRolesTable";
import {CreateUsersTable1746473314580} from "./src/migrations/1746473314580-CreateUsersTable";


import {User} from "./src/entities/user.entity";
import {Role} from "./src/entities/roles.entity";
import {ProfessionCategory} from "./src/entities/profession-category.entity";

import {CreateMbtiTest1747303830951} from "./src/migrations/1747303830951-CreateMbtiTest";
import {MbtiTest} from "./src/entities/mbti-test.entity";
import {MbtiQuestion} from "./src/entities/mbti-question.entity";

import {CreateUserMbtiResults1747390076056} from "./src/migrations/1747390076056-CreateUserMbtiResults";
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
import {Course} from "./src/entities/course.entity";
import {Skill} from "./src/entities/skill.entity";
import {ProfessionCategoryTranslation} from "./src/entities/profession-category-translation.entity";
import {ProfessionTranslation} from "./src/entities/profession-translation.entity";
import {SkillTranslation} from "./src/entities/skill-translation.entity";
import {CourseTranslation} from "./src/entities/course-translation.entity";
import {UserCourse} from "./src/entities/users-courses.entity";
import {CreateEducationLevels1747842500144} from "./src/migrations/1747842500144-CreateEducationLevels";
import {CreateInterests1747842517265} from "./src/migrations/1747842517265-CreateInterests";
import {CreatePrinciples1747842530770} from "./src/migrations/1747842530770-CreatePrinciples";
import {CreateWorkEnvironmentTypes1747842566540} from "./src/migrations/1747842566540-CreateEnvironmentTypes";
import {CreateEmploymentTypes1747842576639} from "./src/migrations/1747842576639-CreateEmploymentTypes";

import {EducationLevel} from "./src/entities/education-level.entity";
import {EducationLevelTranslation} from "./src/entities/education-level-translation.entity";

import {EmploymentType} from "./src/entities/employment-type.entity";
import {EmploymentTypeTranslation} from "./src/entities/employment-type-translation.entity";

import {Interest} from "./src/entities/interest.entity";
import {InterestTranslation} from "./src/entities/interest-translation.entity";

import {EnvironmentType} from "./src/entities/environment-type.entity";
import {EnvironmentTypeTranslation} from "./src/entities/environment-type-translation.entity";

import {Principle} from "./src/entities/principle.entity";
import {PrincipleTranslation} from "./src/entities/principle-translation.entity";
import {CreateUsersEducationLevels1747942496358} from "./src/migrations/1747942496358-CreateUsersEducationLevels";
import {CreateUsersPrinciples1747942528776} from "./src/migrations/1747942528776-CreateUsersPrinciples";
import {CreateUsersInterests1747942509925} from "./src/migrations/1747942509925-CreateUsersInterests";
import {CreateUsersEnvironmentTypes1747942550774} from "./src/migrations/1747942550774-CreateUsersEnvironmentTypes";
import {CreateUsersEmploymentTypes1747942567882} from "./src/migrations/1747942567882-CreateUsersEmploymentTypes";
import {CreateLearningPath1748023989566} from "./src/migrations/1748023989566-CreateLearningPath";
import {LearningPath} from "./src/entities/learning-path.entity";
import {Achievement} from "./src/entities/achievement.entity";
import {LearningPathDay} from "./src/entities/learning-path-day.entity";
import {MbtiOption} from "./src/entities/mbti-option.entity";
import {MbtiOptionTranslation} from "./src/entities/mbti-option-translation.entity";
import {AchievementTranslation} from "./src/entities/achievement-translation.entity";
import {LearningPathTranslation} from "./src/entities/learning-path-translation.entity";
import {LearningPathDayTranslation} from "./src/entities/learning-path-day-translation.entity";
import {Publication} from "./src/entities/publication.entity";
import {PublicationTranslation} from "./src/entities/publication-translation.entity";
import {CreateUserReadPublications1749318342183} from "./src/migrations/1749318342183-CreateUserReadPublications";
import {CreateUserTestPassages1749318474888} from "./src/migrations/1749318474888-CreateUserTestPassages";
import {UserReadPublication} from "./src/entities/user-read-publication.entity";
import {UserTestPassage} from "./src/entities/user-test-passage.entity";
import {Test} from "./src/entities/test.entity";
import {TestTranslation} from "./src/entities/test-translation.entity";
import {TestQuestion} from "./src/entities/test-question.entity";
import {TestQuestionTranslation} from "./src/entities/test-question-translation.entity";
import {TestAnswerOption} from "./src/entities/test-answer-option.entity";
import {TestAnswerOptionTranslation} from "./src/entities/test-answer-option-translation.entity";
import {CreatePublicationsTable1748023989466} from "./src/migrations/1748023989466-CreatePublicationsTable";
import {CreateTests1748023989456} from "./src/migrations/1748023989456-CreateTests";

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'shark',
    password: 'shark',
    database: 'shark_db',
    entities: [
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

        EducationLevel,
        EducationLevelTranslation,

        EmploymentType,
        EmploymentTypeTranslation,

        Interest,
        InterestTranslation,

        Principle,
        PrincipleTranslation,

        EnvironmentType,
        EnvironmentTypeTranslation,

        Achievement,
        AchievementTranslation,

        LearningPath,
        LearningPathTranslation,
        LearningPathDay,
        LearningPathDayTranslation,

        Test,
        TestTranslation,
        TestQuestion,
        TestQuestionTranslation,
        TestAnswerOption,
        TestAnswerOptionTranslation,

        Publication,
        PublicationTranslation,

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

        UserTestPassage,
        UserReadPublication,

        MbtiTest,
        MbtiTestTranslation,
        MbtiQuestion,
        MbtiQuestionTranslation,
        MbtiOption,
        MbtiOptionTranslation,
        UserMbtiResult,
    ],
    synchronize: false,
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
        CreateUsersCourses1747507580098,

        CreateUsersSkills1747507549607,
        CreateEducationLevels1747842500144,
        CreateInterests1747842517265,
        CreatePrinciples1747842530770,
        CreateWorkEnvironmentTypes1747842566540,
        CreateEmploymentTypes1747842576639,

        CreateUsersEducationLevels1747942496358,
        CreateUsersInterests1747942509925,
        CreateUsersPrinciples1747942528776,
        CreateUsersEnvironmentTypes1747942550774,
        CreateUsersEmploymentTypes1747942567882,

        CreateLearningPath1748023989566,
        CreatePublicationsTable1748023989466,
        CreateTests1748023989456,

        CreateUserReadPublications1749318342183,
        CreateUserTestPassages1749318474888,

        // CreateRiasecTestAndQuestions1747246746111,
        CreateMbtiTest1747303830951,
        // CreateDiscTestAndQuestions1747313369584,
        // CreateGallupTestAndQuestions1747324557271,
        // CreateBigFiveTest1747337484999,
        // CreateAsvabTest1747385013673,
        CreateUserMbtiResults1747390076056,
    ],
});