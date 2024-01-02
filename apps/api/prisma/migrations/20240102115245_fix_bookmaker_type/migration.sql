/*
  Warnings:

  - You are about to drop the column `color` on the `Bet` table. All the data in the column will be lost.
  - You are about to drop the `BookMaker` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Bet" DROP CONSTRAINT "Bet_bookMakerId_fkey";

-- AlterTable
ALTER TABLE "Bet" DROP COLUMN "color";

-- DropTable
DROP TABLE "BookMaker";

-- CreateTable
CREATE TABLE "Bookmaker" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Bookmaker_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_bookMakerId_fkey" FOREIGN KEY ("bookMakerId") REFERENCES "Bookmaker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
