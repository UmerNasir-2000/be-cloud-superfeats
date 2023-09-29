-- CreateEnum
CREATE TYPE "Status" AS ENUM ('DRAFT', 'PUBLISHED', 'COMPLETED', 'CANCELLED', 'DELETED');

-- CreateTable
CREATE TABLE "troves" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "troves_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "superfeats" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "Status" NOT NULL DEFAULT 'DRAFT',
    "completed_at" TIMESTAMP(3),
    "troveId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "superfeats_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "troves_title_key" ON "troves"("title");

-- CreateIndex
CREATE UNIQUE INDEX "superfeats_title_key" ON "superfeats"("title");

-- AddForeignKey
ALTER TABLE "superfeats" ADD CONSTRAINT "superfeats_troveId_fkey" FOREIGN KEY ("troveId") REFERENCES "troves"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
