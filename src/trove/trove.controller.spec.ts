import { Test, TestingModule } from '@nestjs/testing';
import { TroveController } from './trove.controller';
import { TroveService } from './trove.service';

describe('TroveController', () => {
  let controller: TroveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TroveController],
      providers: [TroveService],
    }).compile();

    controller = module.get<TroveController>(TroveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
