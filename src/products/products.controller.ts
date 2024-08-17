import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';
import { ProductsEntity } from './entities/products.entity';
import { ProductDto } from './dto/product.dto';
import { SearchProductDto } from './dto/search-product.dto';
import { SearchByCodeDto } from './dto/search-by-code.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Public()
  @Get('/search')
  async search(@Query() searchProductDto: SearchProductDto): Promise<{ data: ProductsEntity[], count: number }> {
    return this.productsService.search(searchProductDto);
  }
  @Post('/create')
  async create(@Body() product: ProductDto): Promise<ProductDto> {
    return this.productsService.create(product)
  }

  @Put('/update/:id')
  async update(@Param('id') id: number, @Body() productDto: ProductDto): Promise<ProductsEntity> {
    return this.productsService.update(id, productDto)
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.productsService.remove(id)
  }

  @Get('/search-by-code')
  async searchByCode(@Query() searchByCode: SearchByCodeDto): Promise<ProductsEntity> {
    const { code } = searchByCode
    return this.productsService.searchByCode(code)
  }
  @Get('/count-all-product')
  async count(): Promise<number> {
    return this.productsService.count()
  }
}
