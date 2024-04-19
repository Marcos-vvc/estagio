import { Body, Controller, Delete, Param, Post } from '@nestjs/common'
import { UsuarioService } from './usuario.service'

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async criarUsuario(
    @Body()
    data: {
      Nome: string
      Email: string
      perfilID: string
    },
  ): Promise<void> {
    const { Nome, Email, perfilID } = data
    await this.usuarioService.criarUsuario(Nome, Email, perfilID)
  }

  @Delete(':userID')
  async deletarUsuario(@Param('userID') userID: string): Promise<string> {
    const usuarioDeletado = await this.usuarioService.deletarUsuario(userID)

    return usuarioDeletado
  }
}
