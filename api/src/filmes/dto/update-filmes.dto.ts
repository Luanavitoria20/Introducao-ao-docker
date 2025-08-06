import { PartialType } from '@nestjs/swagger';
import { CreateFilmeDto } from './create-filmes.dto';

export class UpdateFilmeDto extends PartialType(CreateFilmeDto) {}
