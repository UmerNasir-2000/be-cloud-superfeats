import { Test, TestingModule } from '@nestjs/testing';
import SuperfeatRepository from './superfeat.repository';

describe('SuperfeatRepository', () => {
  let service: SuperfeatRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperfeatRepository],
    }).compile();

    service = module.get<SuperfeatRepository>(SuperfeatRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
