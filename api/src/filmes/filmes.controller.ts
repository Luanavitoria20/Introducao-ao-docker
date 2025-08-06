import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { FilmeService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filmes.dto';
import { UpdateFilmeDto } from './dto/update-filmes.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Filme } from './entities/filme.entity';

@ApiTags('Filmes')
@Controller('filme')
export class FilmeController {
  constructor(private readonly filmeService: FilmeService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo filme' })
  @ApiResponse({ status: 201, type: Filme })
  @ApiResponse({ status: 409, description: 'Conflito: Filme já existe.' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor.' })
  create(@Body() dto: CreateFilmeDto) {
    return this.filmeService.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os filmes' })
  @ApiResponse({ status: 200, type: [Filme] })
  findAll() {
    return this.filmeService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar um filme por ID' })
  @ApiResponse({ status: 200, type: Filme })
  findOne(@Param('id') id: string) {
    return this.filmeService.findOne(+id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Atualizar um filme' })
  @ApiResponse({ status: 200, type: Filme })
  update(@Param('id') id: string, @Body() dto: UpdateFilmeDto) {
    return this.filmeService.update(+id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remover um filme' })
  @ApiResponse({ status: 200 })
  remove(@Param('id') id: string) {
    return this.filmeService.remove(+id);
  }
}
