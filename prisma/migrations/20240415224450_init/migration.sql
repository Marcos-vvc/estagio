-- CreateTable
CREATE TABLE `Perfis` (
    `id_perfil` VARCHAR(191) NOT NULL,
    `nome_perfil` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_perfil`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Projetos` (
    `id_projeto` VARCHAR(191) NOT NULL,
    `nome_projeto` VARCHAR(191) NOT NULL,
    `id_gerente` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_projeto`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Colaboradores` (
    `id_colaborador` VARCHAR(191) NOT NULL,
    `nome_colaborador` VARCHAR(191) NOT NULL,
    `id_projeto` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_colaborador`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tarefas` (
    `id_tarefa` VARCHAR(191) NOT NULL,
    `nome_tarefa` VARCHAR(191) NOT NULL,
    `id_colaborador` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_tarefa`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Projetos` ADD CONSTRAINT `Projetos_id_gerente_fkey` FOREIGN KEY (`id_gerente`) REFERENCES `Perfis`(`id_perfil`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Colaboradores` ADD CONSTRAINT `Colaboradores_id_projeto_fkey` FOREIGN KEY (`id_projeto`) REFERENCES `Projetos`(`id_projeto`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Tarefas` ADD CONSTRAINT `Tarefas_id_colaborador_fkey` FOREIGN KEY (`id_colaborador`) REFERENCES `Colaboradores`(`id_colaborador`) ON DELETE RESTRICT ON UPDATE CASCADE;
