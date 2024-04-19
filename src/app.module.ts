import { Module } from '@nestjs/common'
import { PerfisModule } from './perfis/perfis.module'
import { ProjetosModule } from './projetos/projetos.module'
import { TarefasModule } from './tarefas/tarefas.module'
import { UsuariosModule } from './usuarios/usuario.module'

@Module({
  imports: [PerfisModule, ProjetosModule, TarefasModule, UsuariosModule],
})
export class AppModule {}
