import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MaterialsService } from './materials.service';
import { Public } from 'src/common/decorators/public.decorator';
import { MaterialDto } from './dto/material.dto';
import { MaterialsEntity } from './entities/materials.entity';

@ApiTags('Materials')
@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}
  @Public()
  @Get('/get-all')
  async getAllMaterial() {
    return await this.materialsService.findAllWithType();
  }

  @Post('/create')
  async create(@Body() material: MaterialDto): Promise<MaterialDto> {
    return this.materialsService.create(material);
  }
  @Put('/update/:id')
  async update(
    @Param('id') id: number,
    @Body() material: MaterialDto,
  ): Promise<MaterialDto> {
    return this.materialsService.update(id, material);
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.materialsService.remove(id);
  }

  @Get('/detail/:id')
  async getMaterialDetail(@Param('id') id: number):Promise<MaterialsEntity> {
    return await this.materialsService.findOneById(id);
  }
}
