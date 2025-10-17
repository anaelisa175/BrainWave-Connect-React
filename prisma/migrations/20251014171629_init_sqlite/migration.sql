-- CreateTable
CREATE TABLE "artigos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "subtitulo" TEXT,
    "descricao" TEXT,
    "conteudo" TEXT NOT NULL,
    "componente" TEXT NOT NULL,
    "imagemPrincipal" TEXT,
    "imagemCapa" TEXT,
    "categoria" TEXT,
    "tags" TEXT,
    "autor" TEXT NOT NULL DEFAULT 'BrainWave Connect',
    "dataPublicacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" DATETIME NOT NULL,
    "visualizacoes" INTEGER NOT NULL DEFAULT 0,
    "destaque" BOOLEAN NOT NULL DEFAULT false,
    "premium" BOOLEAN NOT NULL DEFAULT false,
    "ativo" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "contatos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mensagem" TEXT NOT NULL,
    "dataEnvio" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'PENDENTE',
    "resposta" TEXT,
    "dataResposta" DATETIME
);

-- CreateTable
CREATE TABLE "faqs" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "pergunta" TEXT NOT NULL,
    "resposta" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "categoria" TEXT,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "quiz_perguntas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "artigoId" INTEGER,
    "pergunta" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "quiz_perguntas_artigoId_fkey" FOREIGN KEY ("artigoId") REFERENCES "artigos" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "quiz_opcoes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "perguntaId" INTEGER NOT NULL,
    "textoOpcao" TEXT NOT NULL,
    "correta" BOOLEAN NOT NULL DEFAULT false,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "quiz_opcoes_perguntaId_fkey" FOREIGN KEY ("perguntaId") REFERENCES "quiz_perguntas" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "busca_historico" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "termoBusca" TEXT NOT NULL,
    "resultadoEncontrado" BOOLEAN NOT NULL DEFAULT true,
    "quantidadeResultados" INTEGER NOT NULL DEFAULT 0,
    "dataBusca" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "artigos_slug_key" ON "artigos"("slug");
