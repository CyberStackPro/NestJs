import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './all-exception.filter';
// import { MyLoggerService } from './my-logger/my-logger.service';

async function bootstrap() {
  // If we want to use the default logger Global prefix
  // const app = await NestFactory.create(AppModule, {
  //   bufferLogs: true,
  // });
  // app.useLogger(app.get(MyLoggerService));
  // app.setGlobalPrefix('api/v1');
  // app.enableCors();
  // await app.listen(process.env.PORT ?? 3000);
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  app.setGlobalPrefix('api/v1');
  app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
