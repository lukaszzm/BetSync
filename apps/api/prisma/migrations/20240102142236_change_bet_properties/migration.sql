/*
  Warnings:

  - You are about to drop the column `price` on the `Bet` table. All the data in the column will be lost.
  - You are about to drop the column `toWin` on the `Bet` table. All the data in the column will be lost.
  - Added the required column `potentialReturn` to the `Bet` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stake` to the `Bet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bet" DROP COLUMN "price",
DROP COLUMN "toWin",
ADD COLUMN     "potentialReturn" INTEGER NOT NULL,
ADD COLUMN     "stake" INTEGER NOT NULL;
