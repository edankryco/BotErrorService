import { Test, TestingModule } from '@nestjs/testing';
import { PosteriorsService } from './posteriors.service';

describe('GeterrorsService', () => {
  let service: PosteriorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosteriorsService],
    }).compile();

    service = module.get<PosteriorsService>(PosteriorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
