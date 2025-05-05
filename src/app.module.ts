import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfessionModule } from './modules/professions.module';
import {AuthModule} from "./modules/auth.module";
import {UsersModule} from "./modules/users.module";
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Для доступу до env-змінних
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'shark',
      password: '11111111',
      database: 'shark',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false, // true тільки в розробці
      migrations: ['dist/migrations/*.js'],
    }),
    ProfessionModule,
    AuthModule,
    UsersModule, // якщо є окремий модуль для користувачів
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
