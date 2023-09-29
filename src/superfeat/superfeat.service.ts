import { Injectable } from '@nestjs/common';
import SuperfeatRepository from './repository/superfeat.repository';

@Injectable()
export class SuperfeatService {
  constructor(private readonly superfeatRepository: SuperfeatRepository) {}

  findAll() {
    return this.superfeatRepository.findAll();
  }
}
