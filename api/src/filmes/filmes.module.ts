import { Module } from '@nestjs/common';
import { FilmeService } from './filmes.service';
import { FilmeController } from './filmes.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [FilmeController],
  providers: [FilmeService, PrismaService],
})
export class FilmeModule {}
