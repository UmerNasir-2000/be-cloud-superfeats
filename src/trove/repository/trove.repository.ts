import { Injectable } from '@nestjs/common';
import { Trove } from '@prisma/client';
import { PrismaService } from '../../database/database.service';

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

  create(data: Trove): Promise<Trove> {
    return this.trove.create({ data });
  }

  update(id: string, data: Partial<Trove>): Promise<Trove> {
    return this.trove.update({ where: { id }, data });
  }
}
