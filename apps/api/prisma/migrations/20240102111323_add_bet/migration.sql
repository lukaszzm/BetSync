-- CreateEnum
CREATE TYPE "BetStatus" AS ENUM ('pending', 'won', 'lost');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "balance" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "limit" INTEGER;

-- CreateTable
CREATE TABLE "BookMaker" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,
    "domain" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "BookMaker_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bet" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,
    "bookMakerId" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "toWin" INTEGER NOT NULL,
    "status" "BetStatus" NOT NULL DEFAULT 'pending',
    "color" TEXT NOT NULL,

    CONSTRAINT "Bet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bet" ADD CONSTRAINT "Bet_bookMakerId_fkey" FOREIGN KEY ("bookMakerId") REFERENCES "BookMaker"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
