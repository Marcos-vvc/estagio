 
# Teste Prático

## Tópicos :scroll:

:small_blue_diamond: [Detalhes do projeto](#detalhes-do-projeto-memo)

:small_blue_diamond: [Funcionalidades](#funcionalidades-stars)

:small_blue_diamond: [Veja você mesmo](#veja-você-mesmo-arrow_forward)

:small_blue_diamond: [Tecnologias](#tecnologias-books)

:small_blue_diamond: [Desenvolvedores/Contribuintes](#desenvolvedorescontribuintes-octocat)

## Detalhes do projeto :memo:

<p align="justify">
Este projeto é uma solução robusta para o <strong>gerenciamento de tarefas</strong>, projetada para otimizar a produtividade e a eficiência da equipe. Ele apresenta uma estrutura de acesso de dois níveis: <strong>Gerente</strong> e <strong>Colaborador</strong>.

O <strong>Gerente</strong> é o motor principal deste sistema. Ele é responsável por criar o projeto, registrar colaboradores no projeto e atribuir tarefas para os colaboradores executarem. Este perfil de usuário é criado com base no ID do perfil, permitindo ao gerente a flexibilidade de criar não apenas projetos, mas também tarefas.

O **Colaborador**, por outro lado, é o executor das tarefas atribuídas pelo gerente dentro do projeto. Este perfil de usuário é essencial para a realização dos objetivos do projeto.

A estrutura de dados deste projeto é composta por quatro tabelas principais:
1. **Usuário**: Armazena informações dos usuários.
2. **PerfilUsuario**: Define os perfis dos usuários (Gerente ou Colaborador).
3. **Projeto**: Contém detalhes dos projetos criados.
4. **Tarefa**: Mantém um registro das tarefas atribuídas.

Para garantir a eficiência e a segurança dos dados, escolhi o **MySQL** como sistema de gerenciamento de banco de dados. Ele é conhecido por sua confiabilidade e desempenho de alto nível, tornando-o a escolha ideal para este projeto.

Em resumo, este projeto é uma ferramenta poderosa para gerenciar tarefas e projetos, promovendo a colaboração eficaz e a produtividade da equipe.
</p>

## Funcionalidades :stars:

✔️ Criar e Deletar Perfis

✔️ Criar e Deletar Usuários

✔️ Buscar, criar, editar e deletar Projetos

✔️ Buscar, criar, editar e deletar Tarefas


## Veja você mesmo :arrow_forward:
    
#### :small_blue_diamond: Na própria máquina - Passo-a-passo

   
##### Passo 1: Clonando o repositório
```bash
git clone https://github.com/Marcos-vvc/estagio.git
```
    
##### Passo 2: Acessando a pasta do projeto
```bash
cd estagio
```
    
##### Passo 3: Instalando as dependências
```bash
npm install
```

##### Passo 4: Executando o projeto
```bash
npm run start:dev
  
# O projeto deverá ser iniciado na porta 3333
```

##### Passo 5: Vizualizando tabelas

```bash
npx prisma studio
```

## Segue a documentação :memo:
 - [Documentação Postman](https://documenter.getpostman.com/view/20351037/2sA3Bn7YXE)

    
## Tecnologias :books:

  - [NestJS](https://nestjs.com)
  - [Typescript](https://www.typescriptlang.org)
  - [PrismaCLI](https://www.prisma.io)
  - [MySQL](https://www.mysql.com)
    
## Desenvolvedores/Contribuintes :octocat:

<img src="https://github.com/Marcos-vvc.png" width=115><br>
<a aria-label="LinkedIn - Marcos Vinicius" href="https://www.linkedin.com/in/marcos-vinicius-080659117/">
    <img src="https://img.shields.io/static/v1?logo=linkedin&label=LinkedIn&message=Marcos%20Vinicius&color=00A0DC&style=flat&labelColor=0077B5"> 
</a><br>
<a aria-label="GitHub - Marcos Vinicius" href="https://github.com/Marcos-vvc">
    <img alt="GitHub - Marcos Vinicius" src="https://img.shields.io/static/v1?logo=github&label=GitHub&message=Marcos%20Vinicius&color=2FBB4F&style=flat&labelColor=211F1F"></img>
</a>

