import { Module } from '@nestjs/common';
import { MaterialsController } from './materials.controller';
import { MaterialsService } from './materials.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaterialsEntity } from './entities/materials.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MaterialsEntity])],
  controllers: [MaterialsController],
  providers: [MaterialsService],
})
export class MaterialsModule {}
