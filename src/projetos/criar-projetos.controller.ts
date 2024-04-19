import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { ProjetoService } from './projeto.service'

@Controller('projeto')
export class ProjetoController {
  constructor(private readonly projetoService: ProjetoService) {}

  @Get()
  async buscarProjetos() {
    return this.projetoService.buscarProjetos()
  }

  @Post()
  async criarProjeto(
    @Body() data: { nomeProjeto: string; descricao: string; gerenteId: string },
  ): Promise<void> {
    const { nomeProjeto, descricao, gerenteId } = data

    await this.projetoService.criarProjeto(nomeProjeto, descricao, gerenteId)
  }

  @Put(':projetoID')
  async atualizarProjetos(
    @Param('projetoID') projetoID: string,
    @Body() data: { nomeProjeto: string; descricao: string; gerenteId: string },
  ) {
    const { nomeProjeto, descricao, gerenteId } = data
    return this.projetoService.atualizarProjetos(
      projetoID,
      nomeProjeto,
      descricao,
      gerenteId,
    )
  }

  @Delete(':projetoID')
  async deletarProjeto(@Param('projetoID') projetoID: string): Promise<void> {
    return this.projetoService.deleteProjeto(projetoID)
  }
}
