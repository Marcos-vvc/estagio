import { Injectable, NotFoundException } from '@nestjs/common'
import { TarefaRepository } from './tarefa-repository'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class TarefaService {
  constructor(
    private tarefaRepository: TarefaRepository,
    private readonly prisma: PrismaService,
  ) {}

  async buscarTarefas() {
    const tarefas = await this.prisma.projeto.findMany()
    if (!tarefas || tarefas.length === 0) {
      throw new NotFoundException('Nenhuma tarefa encontrada')
    }
    return tarefas
  }

  async criarTarefa(
    NomeTarefa: string,
    Descricao: string,
    ProjetoID: string,
    ResponsavelID: string,
  ): Promise<boolean> {
    return this.tarefaRepository.criarTarefa(
      NomeTarefa,
      Descricao,
      ProjetoID,
      ResponsavelID,
    )
  }

  async atualizarTarefas(
    tarefaID: string,
    nomeTarefa: string,
    descricao: string,
    projetoID: string,
    responsavelID: string,
  ) {
    const tarefaExistente = await this.prisma.tarefa.findUnique({
      where: { TarefaID: tarefaID },
    })
    if (!tarefaExistente) {
      throw new NotFoundException(`Tarefa com ID ${tarefaID} não encontrada`)
    }

    return this.prisma.tarefa.update({
      where: { TarefaID: tarefaID },
      data: {
        NomeTarefa: nomeTarefa,
        Descricao: descricao,
        ProjetoID: projetoID,
        ResponsavelID: responsavelID,
      },
    })
  }

  async deletarTarefa(tarefaID: string): Promise<void> {
    const tarefaExistente = await this.prisma.tarefa.findUnique({
      where: { TarefaID: tarefaID },
    })
    if (!tarefaExistente) {
      throw new NotFoundException(`Tarefa com ID ${tarefaID} não encontrada`)
    }

    await this.prisma.tarefa.delete({
      where: { TarefaID: tarefaID },
    })
  }
}
