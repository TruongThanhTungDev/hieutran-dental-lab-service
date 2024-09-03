import { Test, TestingModule } from '@nestjs/testing';
import { TypeMaterialEditorController } from './type-material-editor.controller';

describe('TypeMaterialEditorController', () => {
  let controller: TypeMaterialEditorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TypeMaterialEditorController],
    }).compile();

    controller = module.get<TypeMaterialEditorController>(TypeMaterialEditorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
