import { Test, TestingModule } from '@nestjs/testing';
import { PosteriorsController } from './posteriors.controller';

describe('GeterrorsController', () => {
  let controller: PosteriorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PosteriorsController],
    }).compile();

    controller = module.get<PosteriorsController>(PosteriorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
