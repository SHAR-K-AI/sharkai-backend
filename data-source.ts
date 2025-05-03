// data-source.ts
import { DataSource } from 'typeorm';
import {CreateProfessions1746134222680} from "./src/migrations/1746134222680-CreateProfessions";
import {Profession} from "./src/entities/profession.entity";

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
        CreateProfessions1746134222680
    ], // Шлях до міграцій
});