-- CreateTable
CREATE TABLE `tipo_atividade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `interna` TINYINT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `atividade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(100) NOT NULL,
    `data_inicial` DATETIME(0) NOT NULL,
    `data_final` DATETIME(0) NOT NULL,
    `tipo_atividade_id` INTEGER NOT NULL,

    UNIQUE INDEX `atividade_id_key`(`id`),
    INDEX `fk_atividade_tipo_atividade1_idx`(`tipo_atividade_id`),
    PRIMARY KEY (`id`, `tipo_atividade_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `especializacao` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(45) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(80) NOT NULL,
    `login` VARCHAR(80) NOT NULL,
    `admin` TINYINT NOT NULL,
    `especializacao_id` INTEGER NOT NULL,

    INDEX `fk_usuario_especializacao_idx`(`especializacao_id`),
    PRIMARY KEY (`id`, `especializacao_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuario_atividade` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_arquivo` VARCHAR(150) NULL,
    `data_upload` DATETIME(0) NULL,
    `arquivo_valido` TINYINT NULL,
    `data_validacao` DATETIME(0) NULL,
    `justificativa` VARCHAR(200) NULL,
    `atividade_id` INTEGER NOT NULL,
    `pontos` INTEGER NULL DEFAULT 0,

    INDEX `fk_usuario_atividade_atividade1_idx`(`atividade_id`),
    PRIMARY KEY (`id`, `atividade_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `atividade` ADD CONSTRAINT `fk_atividade_tipo_atividade1` FOREIGN KEY (`tipo_atividade_id`) REFERENCES `tipo_atividade`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `usuario` ADD CONSTRAINT `fk_usuario_especializacao` FOREIGN KEY (`especializacao_id`) REFERENCES `especializacao`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `usuario_atividade` ADD CONSTRAINT `fk_usuario_atividade_atividade10` FOREIGN KEY (`atividade_id`) REFERENCES `atividade`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
