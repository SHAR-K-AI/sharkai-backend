import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🟢 Спочатку вмикаємо CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
  });

  // 🔵 Потім запускаємо сервер
  await app.listen(process.env.PORT ?? 8000);

  // (необов’язково) Вивід усіх маршрутів
  const server = app.getHttpServer();
  const router = server._events.request._router;
  const availableRoutes: any[] = [];

  router.stack.forEach((middleware) => {
    if (middleware.route) {
      availableRoutes.push({
        method: Object.keys(middleware.route.methods)[0].toUpperCase(),
        path: middleware.route.path,
      });
    }
  });

  console.table(availableRoutes);
}
bootstrap();
