import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { TarefaService } from './tarefa.service'

@Controller('tarefa')
export class TarefaController {
  constructor(private readonly tarefaService: TarefaService) {}

  @Get()
  async buscarTarefas() {
    return this.tarefaService.buscarTarefas()
  }

  @Post()
  async criarTarefa(
    @Body()
    data: {
      NomeTarefa: string
      Descricao: string
      ProjetoID: string
      ResponsavelID: string
    },
  ): Promise<void> {
    const { NomeTarefa, Descricao, ProjetoID, ResponsavelID } = data
    await this.tarefaService.criarTarefa(
      NomeTarefa,
      Descricao,
      ProjetoID,
      ResponsavelID,
    )
  }

  @Put(':tarefaID')
  async atualizarProjetos(
    @Param('tarefaID') tarefaID: string,
    @Body()
    data: {
      NomeTarefa: string
      Descricao: string
      ProjetoID: string
      ResponsavelID: string
    },
  ) {
    const { NomeTarefa, Descricao, ProjetoID, ResponsavelID } = data
    return this.tarefaService.atualizarTarefas(
      tarefaID,
      NomeTarefa,
      Descricao,
      ProjetoID,
      ResponsavelID,
    )
  }

  @Delete(':tarefaID')
  async deletarProjeto(@Param('tarefaID') tarefaID: string): Promise<void> {
    return this.tarefaService.deletarTarefa(tarefaID)
  }
}
