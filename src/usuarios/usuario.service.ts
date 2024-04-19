import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { UsuarioRepository } from './usuario-repository'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class UsuarioService {
  constructor(
    private usuarioRepository: UsuarioRepository,
    private prisma: PrismaService,
  ) {}

  async criarUsuario(
    Nome: string,
    Email: string,
    perfilID: string,
  ): Promise<boolean> {
    if (!perfilID) {
      throw new BadRequestException('PerfilID não pode ser nulo')
    }

    const perfil = await this.prisma.perfilUsuario.findUnique({
      where: { PerfilID: perfilID },
    })
    if (!perfil) {
      throw new NotFoundException(`Perfil com ID ${perfilID} não encontrado`)
    }
    return this.usuarioRepository.criarUsuario(Nome, Email, perfilID)
  }

  async deletarUsuario(userID: string): Promise<string> {
    return this.usuarioRepository.deletarUsuario(userID)
  }
}
