// data-source.ts
import { DataSource } from 'typeorm';
import {Profession} from "./src/entities/profession.entity";

import {CreateProfessions1746134222680} from "./src/migrations/1746134222680-CreateProfessions";
import {CreateRolesTable1746472423946} from "./src/migrations/1746472423946-CreateRolesTable";
import {CreateUsersTable1746473314580} from "./src/migrations/1746473314580-CreateUsersTable";
import {CreateDefaultUsers1746477067652} from "./src/migrations/1746477067652-CreateDefaultUsers";

export const AppDataSource = new DataSource({
    type: 'mysql', // Тип бази даних, змінено на MySQL
    host: 'localhost',
    port: 3306, // Порт за замовчуванням для MySQL
    username: 'shark',
    password: '11111111',
    database: 'shark',
    entities: [
      Profession
    ], // Додано всі сутності
    synchronize: false, // Вимкнути автоматичне синхронізування
    migrations: [
        CreateProfessions1746134222680,
        CreateRolesTable1746472423946,
        CreateUsersTable1746473314580,
        CreateDefaultUsers1746477067652
    ], // Шлях до міграцій
});