import { Test, TestingModule } from '@nestjs/testing';
import SuperfeatService from './superfeat.service';

describe('SuperfeatService', () => {
  let service: SuperfeatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SuperfeatService],
    }).compile();

    service = module.get<SuperfeatService>(SuperfeatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
