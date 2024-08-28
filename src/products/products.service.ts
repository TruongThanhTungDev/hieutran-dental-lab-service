import { Injectable, NotFoundException } from '@nestjs/common';
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
  async search(
    searchCriteria: Partial<ProductsEntity> & { page?: number; limit?: number },
  ): Promise<{ data: ProductsEntity[]; count: number, totalPages: number }> {
    const {
      code,
      patientName,
      sex,
      doctorClinic,
      numberOfTeeth,
      material,
      startDate,
      endDate,
      page,
      limit,
    } = searchCriteria;

    const query = this.productsRepository.createQueryBuilder('product');

    if (code) {
      query.andWhere('product.code LIKE :code', { code: `%${code}%` });
    }

    if (patientName) {
      query.andWhere('product.patientName LIKE :patientName', {
        patientName: `%${patientName}%`,
      });
    }

    if (sex !== undefined) {
      query.andWhere('product.sex = :sex', { sex });
    }

    if (doctorClinic) {
      query.andWhere('product.doctorClinic LIKE :doctorClinic', {
        doctorClinic: `${doctorClinic}`,
      });
    }

    if (numberOfTeeth !== undefined) {
      query.andWhere('product.numberOfTeeth = :numberOfTeeth', {
        numberOfTeeth,
      });
    }

    if (material) {
      query.andWhere('product.material LIKE :material', {
        material: `${material}`,
      });
    }

    if (startDate) {
      query.andWhere('product.startDate >= :startDate', { startDate });
    }

    if (endDate) {
      query.andWhere('product.endDate <= :endDate', { endDate });
    }

    query.orderBy('product.createdAt', 'DESC');
    const [data, count] = await query
      .skip((page - 1) * limit)
      .take(limit)
      .getManyAndCount();
    const totalPages = Math.ceil(count / limit)
    return { data, count, totalPages };
  }
  async searchByCode(code: string): Promise<ProductsEntity> {
    const product = await this.productsRepository.findOne({ where: { code } });
    if (!product) {
      throw new NotFoundException(`Không tìm thấy mã ${code}`);
    }
    return product;
  }
  update(id: number, product: Partial<ProductsEntity>): Promise<any> {
    return this.productsRepository.update(id, product);
  }
}
