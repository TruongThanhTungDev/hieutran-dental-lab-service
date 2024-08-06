import { BaseInterfaceRepository } from "src/common/bases/repository/base.interface";
import { ProductsEntity } from "../entities/products.entity";

export type ProductsRepositoryInterface = BaseInterfaceRepository<ProductsEntity>