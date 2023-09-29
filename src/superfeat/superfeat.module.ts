import { Module } from '@nestjs/common';
import SuperfeatRepository from './repository/superfeat.repository';
import SuperfeatController from './superfeat.controller';
import SuperfeatService from './superfeat.service';

@Module({
  controllers: [SuperfeatController],
  providers: [SuperfeatService, SuperfeatRepository],
})
export default class SuperfeatModule {}
