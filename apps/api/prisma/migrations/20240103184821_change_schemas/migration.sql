/*
  Warnings:

  - You are about to drop the column `link` on the `Bet` table. All the data in the column will be lost.
  - You are about to drop the column `color` on the `Bookmaker` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Bet" DROP COLUMN "link";

-- AlterTable
ALTER TABLE "Bookmaker" DROP COLUMN "color";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image";
