import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { VersioningType } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const server = await NestFactory.create<NestExpressApplication>(AppModule);
 server.setGlobalPrefix('api');
  server.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ["1","2"],
    /* defaultVersion hoạt động khi có phiên bản được chỉ định trong URL, nếu nó không đc
     khai báo trong controller thì sẽ khởi chạy defaul, miễn là version đó trùng hợp vs defaul */
  });
  server.enableCors();
    const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(server, config);
  SwaggerModule.setup('docs', server, document);
  await server.listen(3000);
  console.log('app listen http://localhost:3000');
}
bootstrap();
