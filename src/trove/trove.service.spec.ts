import { Test, TestingModule } from '@nestjs/testing';
import { TroveService } from './trove.service';

describe('TroveService', () => {
  let service: TroveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TroveService],
    }).compile();

    service = module.get<TroveService>(TroveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
