import { PartialType } from '@nestjs/swagger';
import CreateTroveDto from './create.trove.dto';

export default class UpdateTroveDto extends PartialType(CreateTroveDto) {}
