/*
  Warnings:

  - A unique constraint covering the columns `[title,authorId]` on the table `Blog` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Blog_title_authorId_key" ON "Blog"("title", "authorId");
