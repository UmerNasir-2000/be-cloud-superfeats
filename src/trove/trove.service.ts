import { Injectable } from '@nestjs/common';
import CreateTroveDto from './dto/create.trove.dto';
import UpdateTroveDto from './dto/update.trove.dto';
import TroveRepository from './repository/trove.repository';

@Injectable()
export default class TroveService {
  constructor(private readonly troveRepository: TroveRepository) {}

  create(data: CreateTroveDto) {
    return this.troveRepository.create(data);
  }

  findOne(id: string) {
    return this.troveRepository.findOne(id);
  }

  findAll() {
    return this.troveRepository.findAll();
  }

  update(id: string, data: UpdateTroveDto) {
    return this.troveRepository.update(id, data);
  }

  remove(id: string) {
    return this.troveRepository.remove(id);
  }
}
