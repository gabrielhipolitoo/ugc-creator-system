# Plano de ação - Ugc Creator System

  
## Planejamento e Arquitetura
- Definir escopo inicial do projeto
- (FrontEnd) Next v15
- (BackEnd) Nest
- Criar prototipos de interface no figma
- Definir sprints semanais para organizar o desenvolvimento.


## Deploy e Infraestrutura
- (Github) Criar repositório 
- (CI/CD) Configurar pipeline (build,testes)
-  Vercel para hospedar o frontend
- Render para hospedar backend
- (Banco de dados + Docker) Prisma com postgress
-  Configurar observabilidade para compreender bugs

## Testes
- End To End (e2e) Testes automátizados com cypress
- Integrar cypress ao github Actions para rodar na pipeline.
- Criar agente de ia para testes  
 fdds
## Segurança e Escalabilidade
- Implementar Autentitcação segura(Jwt/Auth0)
-  Criar Politícas de permissções (criador, marca, admin)
- Configurar cors, rete limiting, proteção contra injeções
- Manter estrutura monolitíca 
- Otimizaçã de carregamentos e consultas

## Observações
- Manter a performaça e otmização de processos de forma  contínua
- Monitorar métricas (tempo de respostas de uma ação,consumo, de cpu/memória)
- Manter estrutura monolitíca 
- Documentar  endpoints e arquietura(Swagger + readme)