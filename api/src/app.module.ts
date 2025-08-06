import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { FilmeModule } from './filmes/filmes.module';

@Module({
  imports: [FilmeModule],
  providers: [PrismaService],
})
export class AppModule {}
