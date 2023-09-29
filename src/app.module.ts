import { Module } from '@nestjs/common';
import AppController from './app.controller';
import DatabaseModule from './database/database.module';
import SuperfeatModule from './superfeat/superfeat.module';
import TroveModule from './trove/trove.module';

@Module({
  imports: [DatabaseModule, SuperfeatModule, TroveModule],
  controllers: [AppController],
  providers: [],
})
export default class AppModule {}
