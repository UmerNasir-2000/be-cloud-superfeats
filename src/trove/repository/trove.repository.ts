import { Injectable } from '@nestjs/common';
import { Trove } from '@prisma/client';
import PrismaService from '../../database/database.service';
import CreateTroveDto from '../dto/create.trove.dto';
import UpdateTroveDto from '../dto/update.trove.dto';

@Injectable()
export default class TroveRepository {
  constructor(private readonly _prisma: PrismaService) {}

  private get trove() {
    return this._prisma.trove;
  }

  findAll(): Promise<Trove[]> {
    return this.trove.findMany();
  }

  findOne(id: string): Promise<Trove> {
    return this.trove.findUniqueOrThrow({ where: { id } });
  }

  create(data: CreateTroveDto): Promise<Trove> {
    return this.trove.create({ data });
  }

  update(id: string, data: UpdateTroveDto): Promise<Trove> {
    return this.trove.update({ where: { id }, data });
  }

  remove(id: string): Promise<Trove> {
    return this.trove.delete({ where: { id } });
  }
}
