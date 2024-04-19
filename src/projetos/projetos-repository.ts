import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class ProjetoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async buscarProjetos() {
    return await this.prisma.projeto.findMany()
  }

  async atualizarProjetos(
    projetoID: string,
    nomeProjeto: string,
    descricao: string,
    gerenteId: string,
  ) {
    return this.prisma.projeto.update({
      where: { ProjetoID: projetoID },
      data: {
        NomeProjeto: nomeProjeto,
        Descricao: descricao,
        GerenteID: gerenteId,
      },
    })
  }

  async deleteProjeto(projetoID: string): Promise<string> {
    const projetoExistente = await this.prisma.projeto.findUnique({
      where: { ProjetoID: projetoID },
    })
    if (!projetoExistente) {
      throw new NotFoundException(`Projeto com ID ${projetoID} não encontrado`)
    }

    try {
      await this.prisma.projeto.delete({
        where: { ProjetoID: projetoID },
      })
      return `Projeto ${projetoID} deletado com sucesso!`
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2003'
      ) {
        throw new NotFoundException(
          `Não é possível excluir o projeto ${projetoID} devido a registros dependentes`,
        )
      } else {
        throw error
      }
    }
  }
}
