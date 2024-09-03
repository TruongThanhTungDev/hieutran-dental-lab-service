import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser'
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  const config = new DocumentBuilder()
    .setTitle('Swagger APIs')
    .setDescription('List APIs for Webapp')
    .setVersion('1.0')
    .addTag('products')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/v1', app, document)
  app.enableCors()
  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
