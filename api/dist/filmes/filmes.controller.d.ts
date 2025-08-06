import { FilmeService } from './filmes.service';
import { CreateFilmeDto } from './dto/create-filmes.dto';
import { UpdateFilmeDto } from './dto/update-filmes.dto';
export declare class FilmeController {
    private readonly filmeService;
    constructor(filmeService: FilmeService);
    create(dto: CreateFilmeDto): import("@prisma/client").Prisma.Prisma__FilmeClient<{
        titulo: string;
        diretor: string;
        lancamento: Date;
        criadoEm: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        titulo: string;
        diretor: string;
        lancamento: Date;
        criadoEm: Date;
        id: number;
    }[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__FilmeClient<{
        titulo: string;
        diretor: string;
        lancamento: Date;
        criadoEm: Date;
        id: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, dto: UpdateFilmeDto): import("@prisma/client").Prisma.Prisma__FilmeClient<{
        titulo: string;
        diretor: string;
        lancamento: Date;
        criadoEm: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__FilmeClient<{
        titulo: string;
        diretor: string;
        lancamento: Date;
        criadoEm: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
