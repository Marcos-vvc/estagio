import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { ProjetoController } from './criar-projetos.controller'
import { ProjetoRepository } from './projetos-repository'
import { PerfilRepository } from '../perfis/perfil-repository'
import { ProjetoService } from './projeto.service'

@Module({
  controllers: [ProjetoController],
  providers: [
    PrismaService,
    ProjetoRepository,
    PerfilRepository,
    ProjetoService,
  ],
})
export class ProjetosModule {}
