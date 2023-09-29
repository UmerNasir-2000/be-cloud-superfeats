import { Module } from '@nestjs/common';
import TroveRepository from './repository/trove.repository';
import TroveController from './trove.controller';
import TroveService from './trove.service';

@Module({
  controllers: [TroveController],
  providers: [TroveService, TroveRepository],
})
export default class TroveModule {}
