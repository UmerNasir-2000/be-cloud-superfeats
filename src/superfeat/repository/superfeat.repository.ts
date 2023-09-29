import { Injectable } from '@nestjs/common';
import { Superfeat } from '@prisma/client';
import { PrismaService } from '../../database/database.service';

@Injectable()
export default class SuperfeatRepository {
  constructor(private readonly _prisma: PrismaService) {}

  private get superfeat() {
    return this._prisma.superfeat;
  }

  findAll(): Promise<Superfeat[]> {
    return this.superfeat.findMany();
  }

  findOne(id: string): Promise<Superfeat> {
    return this.superfeat.findUniqueOrThrow({ where: { id } });
  }

  create(data: Superfeat): Promise<Superfeat> {
    return this.superfeat.create({ data });
  }
}
