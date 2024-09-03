import { Test, TestingModule } from '@nestjs/testing';
import { TypeMaterialEditorService } from './type-material-editor.service';

describe('TypeMaterialEditorService', () => {
  let service: TypeMaterialEditorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TypeMaterialEditorService],
    }).compile();

    service = module.get<TypeMaterialEditorService>(TypeMaterialEditorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
