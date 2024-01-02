/*
  Warnings:

  - You are about to drop the column `bookMakerId` on the `Bet` table. All the data in the column will be lost.
  - Added the required column `bookmakerId` to the `Bet` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Bet" DROP CONSTRAINT "Bet_bookMakerId_fkey";

-- AlterTable
ALTER TABLE "Bet" DROP COLUMN "bookMakerId",
ADD COLUMN     "bookmakerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_bookmakerId_fkey" FOREIGN KEY ("bookmakerId") REFERENCES "Bookmaker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
