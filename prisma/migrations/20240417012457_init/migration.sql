/*
  Warnings:

  - You are about to drop the `colaboradores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `perfis` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `projetos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `tarefas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `colaboradores` DROP FOREIGN KEY `Colaboradores_id_projeto_fkey`;

-- DropForeignKey
ALTER TABLE `projetos` DROP FOREIGN KEY `Projetos_id_gerente_fkey`;

-- DropForeignKey
ALTER TABLE `tarefas` DROP FOREIGN KEY `Tarefas_id_colaborador_fkey`;

-- DropTable
DROP TABLE `colaboradores`;

-- DropTable
DROP TABLE `perfis`;

-- DropTable
DROP TABLE `projetos`;

-- DropTable
DROP TABLE `tarefas`;

-- CreateTable
CREATE TABLE `Usuario` (
    `UserID` VARCHAR(191) NOT NULL,
    `Nome` VARCHAR(191) NOT NULL,
    `Email` VARCHAR(191) NOT NULL,
    `PerfilID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`UserID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PerfilUsuario` (
    `PerfilID` VARCHAR(191) NOT NULL,
    `NomePerfil` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`PerfilID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Projeto` (
    `ProjetoID` VARCHAR(191) NOT NULL,
    `NomeProjeto` VARCHAR(191) NOT NULL,
    `Descricao` VARCHAR(191) NULL,
    `GerenteID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ProjetoID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tarefa` (
    `TarefaID` VARCHAR(191) NOT NULL,
    `NomeTarefa` VARCHAR(191) NOT NULL,
    `Descricao` VARCHAR(191) NULL,
    `ProjetoID` VARCHAR(191) NOT NULL,
    `ResponsavelID` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`TarefaID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Usuario` ADD CONSTRAINT `Usuario_PerfilID_fkey` FOREIGN KEY (`PerfilID`) REFERENCES `PerfilUsuario`(`PerfilID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Projeto` ADD CONSTRAINT `Projeto_GerenteID_fkey` FOREIGN KEY (`GerenteID`) REFERENCES `Usuario`(`UserID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tarefa` ADD CONSTRAINT `Tarefa_ProjetoID_fkey` FOREIGN KEY (`ProjetoID`) REFERENCES `Projeto`(`ProjetoID`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tarefa` ADD CONSTRAINT `Tarefa_ResponsavelID_fkey` FOREIGN KEY (`ResponsavelID`) REFERENCES `Usuario`(`UserID`) ON DELETE RESTRICT ON UPDATE CASCADE;
