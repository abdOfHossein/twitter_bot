import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './modules/app/app.module';
import { swaggerConfig } from './config/swagger.config';

async function bootstrap() {
  const logger = new Logger('main')
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('doc', app, document);
  const port = 3000
  await app.listen(port, () => {
    logger.log(`Server is Running on port:${port}`)
  });
}
bootstrap();
