import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialsModule } from './materials/materials.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'hieutran_db',
      autoLoadEntities: true,
      synchronize: true, // Chỉ sử dụng synchronize: true trong quá trình phát triển
    }),
    ProductsModule,
    MaterialsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}