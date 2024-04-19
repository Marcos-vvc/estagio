import { Module } from '@nestjs/common'
import { UsuarioController } from './usuario-controller'
import { UsuarioService } from './usuario.service'
import { PrismaService } from '../prisma/prisma.service'
import { UsuarioRepository } from './usuario-repository'

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, PrismaService, UsuarioRepository],
})
export class UsuariosModule {}
