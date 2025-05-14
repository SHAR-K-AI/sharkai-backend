// data-source.ts
import {DataSource} from 'typeorm';
import {Profession} from "./src/entities/profession.entity";

import {CreateProfessions1746134222680} from "./src/migrations/1746134222680-CreateProfessions";
import {CreateRolesTable1746472423946} from "./src/migrations/1746472423946-CreateRolesTable";
import {CreateUsersTable1746473314580} from "./src/migrations/1746473314580-CreateUsersTable";
import {CreateDefaultUsers1746477067652} from "./src/migrations/1746477067652-CreateDefaultUsers";
import {IscoCategory} from "./src/entities/isco-category.entity";
import {CreateTestsStructure1746719367060} from "./src/migrations/1746719367060-CreateTestsStructure";
import {CreateCareerPaths1746730462448} from "./src/migrations/1746730462448-CreateCareerPaths";
import {CreateCareerCategory1747084538375} from "./src/migrations/1747084538375-CreateCareerCategory";
import {Category} from "./src/entities/career-category.entity";
import {Test} from './src/entities/test.entity';
import {TestQuestion} from "./src/entities/test-question.entity";
import {TestAnswer} from "./src/entities/test-answer.entity";
import {TestLogic} from "./src/entities/test-logic.entity";
import {User} from "./src/entities/user.entity";
import {Role} from "./src/entities/roles.entity";
import {CreateProfessionCategories1747225128827} from "./src/migrations/1747225128827-CreateProfessionCategories";
import {ProfessionCategory} from "./src/entities/profession-category.entity";

export const AppDataSource = new DataSource({
    type: 'mysql', // Тип бази даних, змінено на MySQL
    host: 'localhost',
    port: 3306, // Порт за замовчуванням для MySQL
    username: 'shark',
    password: '11111111',
    database: 'shark',
    entities: [
        Test,
        TestAnswer,
        TestQuestion,
        TestLogic,
        User,
        Role,
        IscoCategory,
        Profession,
        Category,
        ProfessionCategory
    ], // Додано всі сутності
    synchronize: false, // Вимкнути автоматичне синхронізування
    migrations: [
        CreateProfessions1746134222680,
        CreateRolesTable1746472423946,
        CreateUsersTable1746473314580,
        CreateDefaultUsers1746477067652,
        CreateTestsStructure1746719367060,
        CreateCareerPaths1746730462448,
        // CreateCareerCategory1747084538375,
        CreateProfessionCategories1747225128827
    ], // Шлях до міграцій
});