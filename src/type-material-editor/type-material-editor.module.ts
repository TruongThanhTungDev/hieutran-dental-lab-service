import { Module } from '@nestjs/common';
import { TypeMaterialEditorService } from './type-material-editor.service';
import { TypeMaterialEditorController } from './type-material-editor.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeEntity } from './entities/type-material-editor.entitiy';

@Module({
  providers: [TypeMaterialEditorService],
  controllers: [TypeMaterialEditorController],
  imports: [TypeOrmModule.forFeature([TypeEntity])],
})
export class TypeMaterialEditorModule {}
