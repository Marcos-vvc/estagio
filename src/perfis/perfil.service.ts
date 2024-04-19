import { Injectable } from '@nestjs/common'
import { PerfilRepository } from './perfil-repository'

@Injectable()
export class PerfilService {
  constructor(private perfilRepository: PerfilRepository) {}

  async criarPerfil(nomePerfil: string): Promise<string> {
    return this.perfilRepository.criarPerfil(nomePerfil)
  }

  async deletarPerfil(perfilID: string): Promise<string> {
    return this.perfilRepository.deletarPerfil(perfilID)
  }
}
