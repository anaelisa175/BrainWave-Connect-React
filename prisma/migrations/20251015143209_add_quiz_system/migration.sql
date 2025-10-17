/*
  Warnings:

  - You are about to drop the column `artigoId` on the `quiz_perguntas` table. All the data in the column will be lost.
  - Added the required column `quizId` to the `quiz_perguntas` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "quizzes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "artigoId" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataAtualizacao" DATETIME NOT NULL,
    CONSTRAINT "quizzes_artigoId_fkey" FOREIGN KEY ("artigoId") REFERENCES "artigos" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "quiz_tentativas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quizId" INTEGER NOT NULL,
    "sessionId" TEXT,
    "pontuacao" INTEGER NOT NULL DEFAULT 0,
    "totalPerguntas" INTEGER NOT NULL,
    "tempoConclusao" INTEGER,
    "completado" BOOLEAN NOT NULL DEFAULT false,
    "dataTentativa" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "quiz_tentativas_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quizzes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "quiz_respostas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tentativaId" INTEGER NOT NULL,
    "perguntaId" INTEGER NOT NULL,
    "opcaoId" INTEGER NOT NULL,
    "correta" BOOLEAN NOT NULL DEFAULT false,
    "dataResposta" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "quiz_respostas_tentativaId_fkey" FOREIGN KEY ("tentativaId") REFERENCES "quiz_tentativas" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "quiz_respostas_perguntaId_fkey" FOREIGN KEY ("perguntaId") REFERENCES "quiz_perguntas" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "quiz_respostas_opcaoId_fkey" FOREIGN KEY ("opcaoId") REFERENCES "quiz_opcoes" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;

-- Primeiro, criar a tabela quizzes com os quizzes existentes baseados nos artigos
INSERT INTO "quizzes" ("artigoId", "titulo", "descricao", "ativo", "dataCriacao", "dataAtualizacao")
SELECT DISTINCT 
    artigoId,
    'Quiz: ' || (SELECT titulo FROM artigos WHERE id = quiz_perguntas.artigoId),
    'Quiz interativo sobre o artigo',
    true,
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
FROM quiz_perguntas 
WHERE artigoId IS NOT NULL;

-- Agora criar nova tabela quiz_perguntas
CREATE TABLE "new_quiz_perguntas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quizId" INTEGER NOT NULL,
    "pergunta" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL DEFAULT 0,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "quiz_perguntas_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "quizzes" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- Migrar perguntas existentes para o novo formato
INSERT INTO "new_quiz_perguntas" ("id", "quizId", "pergunta", "ordem", "ativo")
SELECT 
    p.id,
    (SELECT q.id FROM quizzes q WHERE q.artigoId = p.artigoId LIMIT 1) as quizId,
    p.pergunta,
    p.ordem,
    true
FROM quiz_perguntas p
WHERE p.artigoId IS NOT NULL;

DROP TABLE "quiz_perguntas";
ALTER TABLE "new_quiz_perguntas" RENAME TO "quiz_perguntas";
CREATE INDEX "quiz_perguntas_quizId_idx" ON "quiz_perguntas"("quizId");
CREATE INDEX "quiz_perguntas_ordem_idx" ON "quiz_perguntas"("ordem");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "quizzes_artigoId_idx" ON "quizzes"("artigoId");

-- CreateIndex
CREATE INDEX "quiz_tentativas_quizId_idx" ON "quiz_tentativas"("quizId");

-- CreateIndex
CREATE INDEX "quiz_tentativas_sessionId_idx" ON "quiz_tentativas"("sessionId");

-- CreateIndex
CREATE INDEX "quiz_tentativas_dataTentativa_idx" ON "quiz_tentativas"("dataTentativa");

-- CreateIndex
CREATE INDEX "quiz_respostas_tentativaId_idx" ON "quiz_respostas"("tentativaId");

-- CreateIndex
CREATE INDEX "quiz_respostas_perguntaId_idx" ON "quiz_respostas"("perguntaId");

-- CreateIndex
CREATE INDEX "quiz_opcoes_perguntaId_idx" ON "quiz_opcoes"("perguntaId");
