/*
  Warnings:

  - You are about to drop the column `amount` on the `client_accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "client_accounts" DROP COLUMN "amount",
ADD COLUMN     "balance" DECIMAL(65,2) NOT NULL DEFAULT 0;
