import { Test, TestingModule } from '@nestjs/testing';
import { SuperfeatController } from './superfeat.controller';
import { SuperfeatService } from './superfeat.service';

describe('SuperfeatController', () => {
  let controller: SuperfeatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SuperfeatController],
      providers: [SuperfeatService],
    }).compile();

    controller = module.get<SuperfeatController>(SuperfeatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
