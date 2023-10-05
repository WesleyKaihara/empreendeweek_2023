/*
  Warnings:

  - The primary key for the `atividade` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `usuario` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `usuario_atividade` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE `atividade` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `usuario` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `usuario_atividade` DROP PRIMARY KEY,
    ADD PRIMARY KEY (`id`);
