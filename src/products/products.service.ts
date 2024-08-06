import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductsEntity } from './entities/products.entity';
import { Repository } from 'typeorm';
import { BaseAbstractService } from 'src/common/bases/service/base-service.abstract';

@Injectable()
export class ProductsService extends BaseAbstractService<ProductsEntity> {
  constructor(
    @InjectRepository(ProductsEntity)
    private productsRepository: Repository<ProductsEntity>,
  ) {
    super(productsRepository);
  }
}
