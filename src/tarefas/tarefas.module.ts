import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { TarefaController } from './tarefa-controller'
import { TarefaRepository } from './tarefa-repository'
import { TarefaService } from './tarefa.service'

@Module({
  controllers: [TarefaController],
  providers: [PrismaService, TarefaService, TarefaRepository],
})
export class TarefasModule {}
