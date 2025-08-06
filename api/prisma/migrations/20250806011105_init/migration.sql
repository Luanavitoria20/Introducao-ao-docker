-- CreateTable
CREATE TABLE "public"."Filme" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "diretor" TEXT NOT NULL,
    "lancamento" TIMESTAMP(3) NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Filme_pkey" PRIMARY KEY ("id")
);
