import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TypeMaterialEditorService } from './type-material-editor.service';
import { Public } from 'src/common/decorators/public.decorator';
import { TypeEntity } from './entities/type-material-editor.entitiy';
import { TypeMaterialDto } from './dto/type-material-editor.dto';

@ApiTags('Type Material Editor')
@Controller('type-material-editor')
export class TypeMaterialEditorController {
  constructor(
    private readonly typeMaterialEditorService: TypeMaterialEditorService,
  ) {}

  @Public()
  @Get('/get-all')
  async getAll(): Promise<{ data: TypeEntity }> {
    return this.typeMaterialEditorService.getAllMaterialByType();
  }

  @Post('/create')
  async create(@Body() type: TypeMaterialDto): Promise<any> {
    const existType = await this.typeMaterialEditorService.findOne({
      where: { title: type.title },
    });
    if (existType) {
      throw new HttpException('Chủ đề này đã tồn tại', HttpStatus.BAD_REQUEST);
    }
    return this.typeMaterialEditorService.create(type);
  }
  @Put('/update/:id')
  async update(
    @Param('id') id: number,
    @Body() typeDto: TypeMaterialDto,
  ): Promise<TypeEntity> {
    const existType = await this.typeMaterialEditorService.findOne({
      where: { title: typeDto.title },
    });
    if (existType) {
      throw new HttpException('Chủ đề này đã tồn tại', HttpStatus.BAD_REQUEST);
    }
    return this.typeMaterialEditorService.update(id, typeDto);
  }

  @Delete('/delete/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.typeMaterialEditorService.remove(id);
  }
}
