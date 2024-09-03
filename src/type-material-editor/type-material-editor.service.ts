import { Injectable } from '@nestjs/common';
import { BaseAbstractService } from 'src/common/bases/service/base-service.abstract';
import { TypeEntity } from './entities/type-material-editor.entitiy';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TypeMaterialEditorService extends BaseAbstractService<TypeEntity> {
  constructor(
    @InjectRepository(TypeEntity)
    private typeMaterialEditorRepository: Repository<TypeEntity>,
  ) {
    super(typeMaterialEditorRepository);
  }
  update(id: number, type: Partial<TypeEntity>): Promise<any> {
    return this.typeMaterialEditorRepository.update(id, type);
  }
  getAllMaterialByType(): Promise<any> {
    return this.typeMaterialEditorRepository.find({ relations: ['materials'] });
  }
}
