/*
  Warnings:

  - You are about to drop the column `potentialReturn` on the `Bet` table. All the data in the column will be lost.
  - You are about to drop the column `prize` on the `Bet` table. All the data in the column will be lost.
  - Added the required column `win` to the `Bet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bet" DROP COLUMN "potentialReturn",
DROP COLUMN "prize",
ADD COLUMN     "win" INTEGER NOT NULL;
