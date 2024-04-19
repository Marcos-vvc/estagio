import { Body, Controller, Delete, Param, Post } from '@nestjs/common'
import { PerfilService } from './perfil.service'

@Controller('perfil')
export class CriarPerfisController {
  constructor(private perfilService: PerfilService) {}

  @Post()
  async criarPerfil(@Body() data: { nomePerfil: string }): Promise<string> {
    const { nomePerfil } = data
    const perfil = await this.perfilService.criarPerfil(nomePerfil)
    return perfil
  }

  @Delete(':perfilID')
  async deletarPerfil(@Param('perfilID') perfilID: string): Promise<string> {
    const perfilDeletado = await this.perfilService.deletarPerfil(perfilID)

    return perfilDeletado
  }
}
