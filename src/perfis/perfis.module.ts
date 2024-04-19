import { Module } from '@nestjs/common'
import { CriarPerfisController } from './criar-perfis.controller'
import { PrismaService } from '../prisma/prisma.service'
import { PerfilRepository } from './perfil-repository'
import { PerfilService } from './perfil.service'

@Module({
  controllers: [CriarPerfisController],
  providers: [PrismaService, PerfilRepository, PerfilService],
})
export class PerfisModule {}
