import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger Config
  const config = new DocumentBuilder()
    .setTitle('API Rede Social')
    .setDescription(
      'Documentação criada como complemento da API desenvolvida para teste técnico.',
    )
    .setVersion('1.0')
    .addTag('api')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // Swagger UI Config
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();
