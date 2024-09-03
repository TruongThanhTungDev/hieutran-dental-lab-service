import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MaterialsEntity } from './entities/materials.entity';
import { Repository } from 'typeorm';
import { BaseAbstractService } from 'src/common/bases/service/base-service.abstract';

@Injectable()
export class MaterialsService extends BaseAbstractService<MaterialsEntity> {
  constructor(
    @InjectRepository(MaterialsEntity)
    private materialsRepository: Repository<MaterialsEntity>,
  ) {
    super(materialsRepository);
  }

  async findAllWithType(): Promise<MaterialsEntity[]> {
    return this.materialsRepository.find({ relations: ['type'] });
  }
  update(id: number, type: Partial<MaterialsEntity>): Promise<any> {
    return this.materialsRepository.update(id, type);
  }
}
