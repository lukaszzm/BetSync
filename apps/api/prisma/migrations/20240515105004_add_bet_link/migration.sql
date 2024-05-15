/*
  Warnings:

  - Added the required column `link` to the `Bet` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Bet" ADD COLUMN     "link" TEXT NOT NULL;
