/*
  Warnings:

  - The values [won,lost] on the enum `BetStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "BetStatus_new" AS ENUM ('pending', 'win', 'lose');
ALTER TABLE "Bet" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Bet" ALTER COLUMN "status" TYPE "BetStatus_new" USING ("status"::text::"BetStatus_new");
ALTER TYPE "BetStatus" RENAME TO "BetStatus_old";
ALTER TYPE "BetStatus_new" RENAME TO "BetStatus";
DROP TYPE "BetStatus_old";
ALTER TABLE "Bet" ALTER COLUMN "status" SET DEFAULT 'pending';
COMMIT;
