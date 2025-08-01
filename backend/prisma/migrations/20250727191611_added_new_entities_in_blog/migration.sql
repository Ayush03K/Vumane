/*
  Warnings:

  - Added the required column `category` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `like` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posted_on` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tags` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "like" INTEGER NOT NULL,
ADD COLUMN     "posted_on" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "tags" TEXT NOT NULL;
