import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import CreateTroveDto from './dto/create.trove.dto';
import UpdateTroveDto from './dto/update.trove.dto';
import TroveService from './trove.service';

@Controller('trove')
export default class TroveController {
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
  create(@Body() data: CreateTroveDto) {
    return this.troveService.create(data);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() data: UpdateTroveDto) {
    return this.troveService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.troveService.remove(id);
  }
}
