import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TracingMiddleware } from './instrumentation/tracing.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(TracingMiddleware);
  await app.listen(3000);
}
bootstrap();
