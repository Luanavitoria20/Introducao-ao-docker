import { ApiProperty } from '@nestjs/swagger';

export class CreateFilmeDto {
  @ApiProperty()
  titulo: string;

  @ApiProperty()
  diretor: string;

  @ApiProperty({ type: String, format: 'date-time' })
  lancamento: Date;
}
