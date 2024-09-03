import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialsModule } from './materials/materials.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TypeMaterialEditorModule } from './type-material-editor/type-material-editor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '103.216.117.76',
      port: 3306,
      username: 'admin01',
      password: 'Admin@00',
      database: 'hieutran_db',
      autoLoadEntities: true,
      synchronize: true, // Chỉ sử dụng synchronize: true trong quá trình phát triển
    }),
    ProductsModule,
    MaterialsModule,
    AuthModule,
    UsersModule,
    TypeMaterialEditorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}