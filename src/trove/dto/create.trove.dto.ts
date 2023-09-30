import { Prisma } from '@prisma/client';
import { IsString } from 'class-validator';

export default class CreateTroveDto implements Prisma.TroveCreateInput {
  @IsString({ message: 'Title must be a string' })
  title: string;
}
