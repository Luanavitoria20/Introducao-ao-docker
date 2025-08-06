import { PrismaService } from '../prisma/prisma.service';
import { CreateFilmeDto } from './dto/create-filmes.dto';
import { UpdateFilmeDto } from './dto/update-filmes.dto';
export declare class FilmeService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateFilmeDto): import("@prisma/client").Prisma.Prisma__FilmeClient<{
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
    findOne(id: number): import("@prisma/client").Prisma.Prisma__FilmeClient<{
        titulo: string;
        diretor: string;
        lancamento: Date;
        criadoEm: Date;
        id: number;
    } | null, null, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: number, data: UpdateFilmeDto): import("@prisma/client").Prisma.Prisma__FilmeClient<{
        titulo: string;
        diretor: string;
        lancamento: Date;
        criadoEm: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: number): import("@prisma/client").Prisma.Prisma__FilmeClient<{
        titulo: string;
        diretor: string;
        lancamento: Date;
        criadoEm: Date;
        id: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
