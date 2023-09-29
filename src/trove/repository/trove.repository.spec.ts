import { Test, TestingModule } from '@nestjs/testing';
import TroveRepository from './trove.repository';

describe('TroveRepository', () => {
  let service: TroveRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TroveRepository],
    }).compile();

    service = module.get<TroveRepository>(TroveRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
