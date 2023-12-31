import { Controller, Get } from '@nestjs/common';
import SuperfeatService from './superfeat.service';

@Controller('superfeat')
export default class SuperfeatController {
  constructor(private readonly superfeatService: SuperfeatService) {}

  @Get()
  findAll() {
    return this.superfeatService.findAll();
  }
}
