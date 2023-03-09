import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './config/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(`http://localhost:${config.port}/graphql`);
  console.log(config.databaseURL)
  console.log("Location Service running")
  await app.listen(config.port);
}
bootstrap();
