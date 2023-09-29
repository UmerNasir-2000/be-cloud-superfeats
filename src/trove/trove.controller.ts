import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { Trove } from '@prisma/client';
import { TroveService } from './trove.service';

@Controller('trove')
export class TroveController {
  constructor(private readonly troveService: TroveService) {}

  @Get()
  findAll() {
    return this.troveService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.troveService.findOne(id);
  }

  @Post()
  create(@Body() data: Trove) {
    return this.troveService.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() data: Partial<Trove>) {
    return this.troveService.update(id, data);
  }
}
