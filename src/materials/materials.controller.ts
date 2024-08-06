import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MaterialsService } from './materials.service';
import { Public } from 'src/common/decorators/public.decorator';

@ApiTags('Materials')
@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) { }
  @Public()
  @Get('/get-all')
  async getAllMaterial() {
    return await this.materialsService.findAll()
  }
}
