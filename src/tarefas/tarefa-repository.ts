import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class TarefaRepository {
  constructor(private prisma: PrismaService) {}

  async buscarTarefas() {
    return await this.prisma.tarefa.findMany()
  }

  async criarTarefa(
    NomeTarefa: string,
    Descricao: string,
    ProjetoID: string,
    ResponsavelID: string,
  ): Promise<boolean> {
    await this.prisma.tarefa.create({
      data: {
        NomeTarefa,
        Descricao,
        ProjetoID,
        ResponsavelID,
      },
    })
    return true
  }

  async atualizarTarefas(
    tarefaID: string,
    NomeTarefa: string,
    Descricao: string,
    ProjetoID: string,
    ResponsavelID: string,
  ) {
    return this.prisma.tarefa.update({
      where: { TarefaID: tarefaID },
      data: { NomeTarefa, Descricao, ProjetoID, ResponsavelID },
    })
  }

  async deletarTarefa(tarefaID: string): Promise<string> {
    const tarefaExistente = await this.prisma.tarefa.findUnique({
      where: { TarefaID: tarefaID },
    })
    if (!tarefaExistente) {
      throw new NotFoundException(`Projeto com ID ${tarefaID} não encontrado`)
    }

    try {
      await this.prisma.tarefa.delete({
        where: { TarefaID: tarefaID },
      })
      return `Projeto ${tarefaID} deletado com sucesso!`
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2003'
      ) {
        throw new NotFoundException(
          `Não é possível excluir o projeto ${tarefaID} devido a registros dependentes`,
        )
      } else {
        throw error
      }
    }
  }
}
