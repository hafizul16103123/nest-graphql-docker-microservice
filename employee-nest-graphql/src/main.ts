import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import configuration  from './config/configuration';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('http://localhost:3000/graphql');
  await app.listen(process.env.PORT);
}
bootstrap();
