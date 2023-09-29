import { Injectable } from '@nestjs/common';
import { Trove } from '@prisma/client';
import TroveRepository from './repository/trove.repository';

@Injectable()
export class TroveService {
  constructor(private readonly troveRepository: TroveRepository) {}

  create(data: Trove) {
    return this.troveRepository.create(data);
  }

  findOne(id: string) {
    return this.troveRepository.findOne(id);
  }

  findAll() {
    return this.troveRepository.findAll();
  }

  update(id: string, data: Partial<Trove>) {
    return this.troveRepository.update(id, data);
  }
}
