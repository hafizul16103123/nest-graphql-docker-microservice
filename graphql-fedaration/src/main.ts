import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`http://localhost:${config.port}/graphql`)
  await app.listen(config.port);
}
bootstrap();
