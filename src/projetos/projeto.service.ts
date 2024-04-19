import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { PerfilRepository } from '../perfis/perfil-repository'

@Injectable()
export class ProjetoService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly perfilRepository: PerfilRepository,
  ) {}

  async buscarProjetos() {
    const projetos = await this.prisma.projeto.findMany()
    if (!projetos || projetos.length === 0) {
      throw new NotFoundException('Nenhum projeto encontrado')
    }
    return projetos
  }

  async criarProjeto(
    nomeProjeto: string,
    descricao: string,
    gerenteId: string,
  ): Promise<void> {
    const usuarioGerente =
      await this.perfilRepository.verificarSeoUsuarioTemPerfilGerente(gerenteId)

    if (!usuarioGerente) {
      throw new UnauthorizedException(
        'Usuário não tem permissão para criar projeto.',
      )
    }

    await this.prisma.projeto.create({
      data: {
        NomeProjeto: nomeProjeto,
        Descricao: descricao,
        GerenteID: gerenteId,
      },
    })
  }

  async atualizarProjetos(
    projetoID: string,
    nomeProjeto: string,
    descricao: string,
    gerenteId: string,
  ) {
    const projetoExistente = await this.prisma.projeto.findUnique({
      where: { ProjetoID: projetoID },
    })
    if (!projetoExistente) {
      throw new NotFoundException(`Projeto com ID ${projetoID} não encontrado`)
    }

    return this.prisma.projeto.update({
      where: { ProjetoID: projetoID },
      data: {
        NomeProjeto: nomeProjeto,
        Descricao: descricao,
        GerenteID: gerenteId,
      },
    })
  }

  async deleteProjeto(projetoID: string): Promise<void> {
    const projetoExistente = await this.prisma.projeto.findUnique({
      where: { ProjetoID: projetoID },
    })
    if (!projetoExistente) {
      throw new NotFoundException(`Projeto com ID ${projetoID} não encontrado`)
    }

    await this.prisma.projeto.delete({
      where: { ProjetoID: projetoID },
    })
  }
}
