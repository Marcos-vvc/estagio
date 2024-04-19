import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { TipoPerfil } from './type'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class PerfilRepository {
  constructor(private prisma: PrismaService) {}

  async verificarSeoUsuarioTemPerfilGerente(UserID: string): Promise<boolean> {
    const perfil = await this.prisma.usuario.findUnique({
      where: { UserID },
    })

    if (!perfil) {
      throw new NotFoundException('Perfil não encontrado')
    }

    return perfil.PerfilID === TipoPerfil.GERENTE
  }

  async criarPerfil(nomePerfil: string): Promise<string> {
    if (!nomePerfil || typeof nomePerfil !== 'string') {
      throw new BadRequestException('Nome do perfil inválido')
    }
    const nomePerfilMinusculo = nomePerfil.toLowerCase()

    const perfilExistente = await this.prisma.perfilUsuario.findFirst({
      where: { NomePerfil: nomePerfil },
    })

    if (perfilExistente) {
      throw new BadRequestException(`Perfil com nome ${nomePerfil} já existe`)
    }

    const perfil = await this.prisma.perfilUsuario.create({
      data: {
        NomePerfil: nomePerfilMinusculo,
      },
    })

    return perfil.NomePerfil
  }

  async deletarPerfil(perfilID: string): Promise<string> {
    const perfil = await this.prisma.perfilUsuario.findUnique({
      where: { PerfilID: perfilID },
    })

    if (!perfil) {
      throw new NotFoundException(`Perfil ${perfilID} não existe`)
    }

    try {
      await this.prisma.perfilUsuario.delete({
        where: { PerfilID: perfilID },
      })
      return `Perfil ${perfilID} deletado com sucesso!`
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2003'
      ) {
        throw new NotFoundException(
          `Não é possível excluir o perfil ${perfilID} devido a registros dependentes`,
        )
      } else {
        throw error
      }
    }
  }
}
