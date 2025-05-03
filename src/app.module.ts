import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { ProfessionModule } from "./modules/professions.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'shark',
      password: '11111111',
      database: 'shark',
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // Adjust the path for your entities
      synchronize: true, // Set to false in production
      migrations: ['dist/migrations/*.js'],
    }),
      ProfessionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
