import { ApiProperty } from '@nestjs/swagger';

export class Filme {
  @ApiProperty()
  id: number;

  @ApiProperty()
  titulo: string;

  @ApiProperty()
  diretor: string;

  @ApiProperty({ type: String, format: 'date-time' })
  lancamento: Date;

  @ApiProperty({ type: String, format: 'date-time' })
  criadoEm: Date;
}
