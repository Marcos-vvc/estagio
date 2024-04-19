import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class UsuarioRepository {
  constructor(private prisma: PrismaService) {}

  async criarUsuario(
    Nome: string,
    Email: string,
    perfilID: string,
  ): Promise<boolean> {
    try {
      await this.prisma.usuario.create({
        data: {
          Nome,
          Email,
          PerfilID: perfilID,
        },
      })

      return true
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error}`)
    }
  }

  async deletarUsuario(userID: string): Promise<string> {
    const usuario = await this.prisma.usuario.findUnique({
      where: { UserID: userID },
    })

    if (!usuario) {
      throw new NotFoundException(`Perfil ${userID} não existe`)
    }

    try {
      await this.prisma.usuario.delete({
        where: { UserID: userID },
      })
      return `Perfil ${userID} deletado com sucesso!`
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2003'
      ) {
        throw new NotFoundException(
          `Não é possível excluir o perfil ${userID} devido a registros dependentes`,
        )
      } else {
        throw error
      }
    }
  }
}
