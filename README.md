<div id="header" align="center">
  <img src="https://i.imgur.com/8JZqX3L.png" width="800" height="400" alt="Advocasys Banner">
</div>

<div id="badges" align="center">
  <a href="https://github.com/seu-usuario/advocasys">
    <img src="https://img.shields.io/badge/Status-Em%20Desenvolvimento-blue?style=for-the-badge&logo=github" alt="Status"/>
  </a>
  <a href="https://nodejs.org/">
    <img src="https://img.shields.io/badge/Node.js-green?style=for-the-badge&logo=node.js" alt="Node.js"/>
  </a>
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-blue?style=for-the-badge&logo=react" alt="React"/>
  </a>
  <a href="https://www.typescriptlang.org/">
    <img src="https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript" alt="TypeScript"/>
  </a>
  <a href="https://turbo.build/">
    <img src="https://img.shields.io/badge/Turbo-purple?style=for-the-badge&logo=turbo" alt="Turbo"/>
  </a>
  <a href="https://pnpm.io/">
    <img src="https://img.shields.io/badge/pnpm-orange?style=for-the-badge&logo=pnpm" alt="pnpm"/>
  </a>
</div>

---

# 🚀 Advocasys - Plataforma de Gestão Jurídica

### [🔗 Demo em Desenvolvimento](#) | [📖 Documentação](#) | [🐛 Reportar Bug](#)

## 📋 Descrição

**Advocasys** é uma solução moderna e completa para gestão de escritórios de advocacia, desenvolvida com tecnologias de ponta em uma arquitetura monorepo. O projeto utiliza princípios de **Domain-Driven Design (DDD)** e **Test-Driven Development (TDD)** para oferecer uma experiência excepcional tanto para advogados quanto para clientes.

**Inicialmente desenvolvido como solução on-premise**, o Advocasys foi arquitetado com flexibilidade para evoluir para um modelo SaaS, permitindo que escritórios de advocacia escolham entre hospedar localmente ou utilizar a versão em nuvem.

### 🎯 Problema que Resolvemos

Escritórios de advocacia enfrentam desafios significativos na gestão administrativa:
- **Desorganização**: Informações espalhadas em diferentes sistemas
- **Ineficiência**: Processos manuais que consomem tempo valioso
- **Falta de Visibilidade**: Dificuldade em acompanhar processos e finanças
- **Comunicação**: Falta de transparência com clientes
- **Compliance**: Dificuldade em manter conformidade legal

### 💡 Nossa Solução

Transformamos o Advocasys em uma plataforma moderna que:
- **Centraliza** todas as informações em um só lugar
- **Automatiza** processos repetitivos
- **Fornece** insights em tempo real
- **Facilita** a comunicação com clientes
- **Garante** conformidade legal

---

## ✨ Funcionalidades Principais

### 🏢 **Dashboard Inteligente**
- **KPIs Personalizáveis**: Métricas em tempo real do escritório
- **Visão Centralizada**: Processos ativos, contratos, receitas/despesas
- **Tarefas Pendentes**: Acompanhamento de atividades
- **Gráficos Interativos**: Visualização de dados com Recharts

### 👥 **Gestão de Pessoas**
- **Cadastro Completo**: Clientes, advogados, usuários internos e fornecedores
- **Controle de Permissões**: Sistema granular de grupos de acesso
- **Histórico Detalhado**: Timeline de interações e documentos
- **Segmentação**: Tags, categorias e status de relacionamento

### 💰 **Sistema Financeiro**
- **Controle de Recebimentos**: Gestão de contas a receber
- **Gestão de Despesas**: Controle de contas a pagar
- **Relatórios Financeiros**: Balanços e DRE
- **Gestão de Caixas**: Controle de entradas e saídas
- **Formas de Pagamento**: Configuração flexível

### ⚖️ **Gestão de Processos Jurídicos**
- **Cadastro de Processos**: Criação e administração completa
- **Acompanhamento**: Histórico de movimentações e status
- **Upload de Documentos**: Armazenamento seguro
- **Audiências**: Controle de audiências programadas
- **Alertas e Notificações**: Lembretes de prazos

### 📋 **Gestão de Contratos**
- **Criação Inteligente**: Templates personalizáveis
- **Administração**: Controle de valores e parcelas
- **Modelos de Contratos**: Configuração de templates
- **Histórico**: Acompanhamento de alterações

### 📱 **Tarefas e Agenda**
- **Planejamento**: Gerenciamento de tarefas e compromissos
- **Notificações**: Lembretes de prazos e audiências
- **Agenda Integrada**: Sincronização com calendários
- **Status Tracking**: Acompanhamento de progresso

### 📢 **Sistema de Notificações**
- **Notificações Internas**: Alertas para advogados e equipe
- **Notificações para Clientes**: Comunicação automática de status
- **Integração WhatsApp**: API oficial para mensagens
- **Integração Telegram**: Bot para notificações
- **Email Automático**: Notificações por email
- **SMS**: Notificações por mensagem de texto

---

## 🛠️ Stack Tecnológica

### **Monorepo & Build Tools**
| Tecnologia | Propósito |
|------------|-----------|
| **Turbo** | Build system e cache |
| **pnpm** | Package manager |
| **TypeScript** | Tipagem estática |
| **Biome** | Linting e formatação |

### **Frontend**
| Tecnologia | Propósito |
|------------|-----------|
| **React** | Framework UI |
| **Vite** | Build tool |
| **Tailwind CSS** | Estilização |
| **ShadcnUI** | Componentes UI reutilizáveis |
| **Radix UI** | Componentes acessíveis |
| **Recharts** | Gráficos |
| **Lucide React** | Ícones |
| **date-fns** | Manipulação de datas |
| **TanStack Query** | Gerenciamento de estado do servidor |
| **TanStack Table** | Tabelas avançadas e interativas |
| **TanStack Router** | Roteamento type-safe |
| **TanStack Virtual** | Virtualização para listas grandes |

### **Backend**
| Tecnologia | Propósito |
|------------|-----------|
| **Node.js** | Runtime JavaScript |
| **Fastify** | Framework web |
| **Prisma** | ORM type-safe |
| **PostgreSQL** | Banco de dados |
| **Zod** | Validação de dados |
| **Vitest** | Framework de testes |
| **@fastify/cors** | Configuração CORS |
| **@fastify/jwt** | Autenticação JWT |
| **@fastify/rate-limit** | Rate limiting |
| **@fastify/multipart** | Upload de arquivos |
| **@fastify/static** | Servir arquivos estáticos |
| **@fastify/swagger** | Documentação da API |
| **@fastify/swagger-ui** | Interface Swagger |
| **@prisma/client** | Cliente Prisma |
| **bcryptjs** | Hash de senhas |
| **jsonwebtoken** | Tokens JWT |
| **multer** | Middleware de upload |
| **helmet** | Segurança HTTP |
| **compression** | Compressão de resposta |
| **pino** | Logger estruturado |
| **pino-pretty** | Formatação de logs para desenvolvimento |

### **Arquitetura & Padrões**
| Tecnologia | Propósito |
|------------|-----------|
| **DDD** | Domain-Driven Design |
| **TDD** | Test-Driven Development |
| **SOLID** | Princípios de arquitetura |
| **Clean Architecture** | Separação de responsabilidades |

### **DevOps & Qualidade**
| Tecnologia | Propósito |
|------------|-----------|
| **Docker** | Containerização |
| **GitHub Actions** | CI/CD |
| **Storybook** | Documentação de componentes |
| **Cypress** | Testes E2E |
| **Husky** | Git hooks |

---

## 🏗️ Arquitetura

### **Estrutura Monorepo**
```
/advocasys
├── apps/
│   ├── web/              # Frontend React
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── hooks/
│   │   │   ├── utils/
│   │   │   └── styles/
│   │   ├── public/
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── tailwind.config.js
│   │   └── vite.config.ts
│   └── api/              # Backend Fastify (em desenvolvimento)
│       ├── src/
│       │   ├── modules/  # Domínios (users, contracts, finance)
│       │   ├── core/     # Camada de domínio
│       │   ├── infra/    # Infraestrutura
│       │   └── shared/   # Utilitários
│       ├── prisma/
│       │   ├── schema.prisma
│       │   └── migrations/
│       ├── package.json
│       └── tsconfig.json
├── packages/
│   ├── ui/               # Componentes compartilhados
│   │   ├── src/
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── config/           # Configurações compartilhadas
│       ├── biome.json
│       └── tsconfig.base.json
├── .github/              # Workflows CI/CD
│   └── workflows/
│       └── ci.yml
├── turbo.json            # Configuração Turbo
├── package.json          # Dependências do monorepo
├── tsconfig.json         # Base TypeScript
└── README.md
```

### **Princípios Arquiteturais**

#### **Domain-Driven Design (DDD)**
- **Separação de Domínios**: Cada domínio tem sua própria estrutura
- **Entidades e Value Objects**: Modelagem rica do domínio
- **Aggregates**: Agregações com invariantes
- **Repositories**: Abstração de acesso a dados
- **Services**: Lógica de domínio complexa

#### **Clean Architecture**
- **Independência de Frameworks**: Core independente de tecnologias
- **Testabilidade**: Fácil de testar em isolamento
- **Independência de UI**: Lógica separada da interface
- **Independência de Banco**: Core não depende de ORM

#### **Test-Driven Development (TDD)**
- **Testes Unitários**: Cobertura completa
- **Testes de Integração**: Validação de fluxos
- **Testes E2E**: Validação de cenários completos
- **Red-Green-Refactor**: Ciclo de desenvolvimento

---

## 🚀 Quick Start

### **Pré-requisitos**
- Node.js
- pnpm
- Git

### **1. Clone o Repositório**
```bash
git clone https://github.com/seu-usuario/advocasys.git
cd advocasys
```

### **2. Instale as Dependências**
```bash
# Instale o pnpm globalmente (se necessário)
npm install -g pnpm

# Instale as dependências do monorepo
pnpm install
```

### **3. Configure o Ambiente**
```bash
# Copie os arquivos de exemplo
cp apps/web/.env.example apps/web/.env
cp apps/api/.env.example apps/api/.env

# Edite as variáveis de ambiente
nano apps/web/.env
nano apps/api/.env
```

### **4. Inicie o Desenvolvimento**
```bash
# Inicia todos os serviços em modo desenvolvimento
pnpm dev

# Ou inicie apenas o frontend
pnpm --filter web dev

# Ou inicie apenas o backend
pnpm --filter api dev
```

### **5. Acesse a Aplicação**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Storybook**: http://localhost:6006 (quando configurado)

---

## 📊 Banco de Dados

### **Modelagem Planejada**
- **Users**: Usuários do sistema
- **Clients**: Clientes (pessoa física/jurídica)
- **Processes**: Processos jurídicos
- **Contracts**: Contratos
- **Payments**: Pagamentos
- **Documents**: Documentos
- **Tasks**: Tarefas e compromissos
- **AuditLogs**: Logs de auditoria

### **Características**
- **UUID**: Identificadores únicos
- **Soft Deletes**: Exclusão lógica
- **Auditoria**: Logs de todas as alterações
- **Relacionamentos**: Chaves estrangeiras otimizadas
- **Índices**: Performance otimizada
- **Logs Estruturados**: Pino para rastreamento completo

---

## 🔒 Segurança

### **Autenticação & Autorização**
- **JWT**: Tokens seguros com refresh
- **RBAC**: Controle de acesso baseado em roles
- **2FA**: Autenticação de dois fatores
- **Rate Limiting**: Proteção contra ataques
- **CORS**: Configuração segura

### **Proteção de Dados**
- **Criptografia**: Dados em repouso e trânsito
- **Validação**: Zod para validação de entrada
- **Sanitização**: Limpeza de dados
- **LGPD**: Conformidade com a lei brasileira
- **Backup**: Backup automático
- **Logs Seguros**: Pino para auditoria e monitoramento

---

## 📱 Interface do Usuário

### **Design System**
- **ShadcnUI**: Componentes UI reutilizáveis e customizáveis
- **Radix UI**: Componentes acessíveis e customizáveis
- **Tailwind CSS**: Estilização utilitária
- **Lucide Icons**: Ícones consistentes
- **Class Variance Authority**: Variantes de componentes
- **Dark Mode**: Suporte a tema escuro (planejado)

### **Componentes Implementados**
- **Alert Dialog**: Diálogos de confirmação
- **Avatar**: Componente de avatar
- **Checkbox**: Checkboxes customizados
- **Dialog**: Modais e diálogos
- **Dropdown Menu**: Menus suspensos
- **Hover Card**: Cards com hover
- **Label**: Labels de formulário
- **Popover**: Popovers informativos
- **Radio Group**: Grupos de radio
- **Scroll Area**: Áreas com scroll
- **Select**: Seletores customizados
- **Separator**: Separadores visuais
- **Switch**: Switches toggle
- **Tooltip**: Tooltips informativos

### **Responsividade**
- **Mobile-first**: Design mobile-first
- **PWA**: Progressive Web App (planejado)
- **Touch-friendly**: Interface touch
- **Acessibilidade**: WCAG 2.1 compliance

---

## 🧪 Testes

### **Frontend**
```bash
# Testes unitários (quando implementados)
pnpm --filter web test

# Testes com UI
pnpm --filter web test:ui

# Testes E2E (quando implementados)
pnpm --filter web test:e2e
```

### **Backend**
```bash
# Testes unitários
pnpm --filter api test

# Testes com coverage
pnpm --filter api test:coverage

# Testes em modo watch
pnpm --filter api test:watch
```

### **Qualidade de Código**
```bash
# Linting
pnpm lint

# Formatação
pnpm format

# Verificação de tipos
pnpm check-types
```

---

## 📈 Performance

### **Frontend**
- **Vite**: Build ultra-rápido
- **Turbo**: Cache inteligente
- **Code Splitting**: Divisão de código
- **Lazy Loading**: Carregamento sob demanda
- **Image Optimization**: Otimização de imagens

### **Backend**
- **Fastify**: Framework ultra-rápido
- **Redis**: Cache de alta performance
- **Connection Pooling**: Pool de conexões
- **Query Optimization**: Queries otimizadas
- **Compression**: Compressão de resposta
- **Pino**: Logging estruturado e performático

---

## 🔄 CI/CD

### **GitHub Actions**
```yaml
# Workflow principal
- Lint e formatação com Biome
- Verificação de tipos TypeScript
- Testes automatizados
- Build de produção
- Deploy automático
- Notificações
```

### **Deploy**

#### **Fase 1: On-Premise (Atual)**
- **Frontend**: Servidor local ou VPS
- **Backend**: Servidor local ou VPS
- **Database**: PostgreSQL local ou gerenciado
- **Monitoring**: Logs locais e ferramentas de monitoramento

#### **Fase 2: SaaS (Futuro)**
- **Frontend**: Vercel/Netlify
- **Backend**: Railway/Render
- **Database**: PostgreSQL gerenciado (AWS RDS, Supabase)
- **Monitoring**: Sentry, DataDog
- **Multi-tenancy**: Arquitetura para múltiplos clientes

---

## 📚 Documentação

### **APIs**
- **Swagger/OpenAPI**: Documentação interativa
- **Postman Collection**: Coleção de endpoints
- **TypeScript**: Tipos para frontend

### **Guias**
- [Guia de Contribuição](CONTRIBUTING.md)
- [Guia de Deploy](DEPLOY.md)
- [Guia de API](API.md)
- [Changelog](CHANGELOG.md)

---

## 🤝 Contribuição

### **Como Contribuir**
1. **Fork** o projeto
2. **Crie** uma branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### **Padrões de Código**
- **Biome**: Linting e formatação automática
- **TypeScript**: Tipagem estática
- **Conventional Commits**: Padrão de commits
- **Husky**: Git hooks (planejado)

---

## 📋 Roadmap

### **Fase 1: Foundation (Em Andamento)**
- [ ] Setup do monorepo com Turbo
- [ ] Configuração do frontend React
- [ ] Componentes UI com Radix
- [ ] Configuração de linting com Biome
- [ ] Setup do backend Fastify
- [ ] Configuração do banco PostgreSQL

### **Fase 2: Core Features (Próximo)**
- [ ] Sistema de autenticação
- [ ] CRUD básico de usuários e clientes
- [ ] Dashboard inicial
- [ ] Gestão de processos
- [ ] Upload de arquivos

### **Fase 3: Advanced Features**
- [ ] Sistema financeiro
- [ ] Gestão de contratos
- [ ] Sistema de notificações internas
- [ ] Integrações de comunicação (WhatsApp, Telegram)
- [ ] Relatórios avançados
- [ ] PWA

### **Fase 4: Polish & Launch**
- [ ] Testes completos
- [ ] Performance optimization
- [ ] Documentação
- [ ] Deploy on-premise
- [ ] Preparação para SaaS

---

## 🎯 Próximas Funcionalidades

### **Em Desenvolvimento**
- [ ] **Backend API**: Implementação com Fastify
- [ ] **Autenticação**: Sistema JWT completo
- [ ] **Banco de Dados**: Modelagem com Prisma
- [ ] **Testes**: Cobertura completa
- [ ] **ShadcnUI**: Setup e configuração
- [ ] **TanStack**: Implementação das bibliotecas
- [ ] **Sistema de Logging**: Configuração do Pino
- [ ] **Notificações Básicas**: Sistema interno de alertas

### **Planejadas**
- [ ] **IA para Análise**: Análise de documentos
- [ ] **Integração WhatsApp**: API oficial para notificações
- [ ] **Integração Telegram**: Bot para notificações automáticas
- [ ] **Sistema de SMS**: Notificações por mensagem de texto
- [ ] **Email Marketing**: Campanhas automáticas
- [ ] **App Mobile**: React Native
- [ ] **Multi-tenant**: Múltiplos escritórios (SaaS)
- [ ] **Arquitetura SaaS**: Preparação para modelo de assinatura

---

## 📊 Métricas do Projeto

<div align="center">

| Métrica | Valor |
|---------|-------|
| **Linhas de Código** | ~10,000+ |
| **Componentes UI** | 15+ |
| **APIs** | Em desenvolvimento |
| **Testes** | Planejados |
| **Performance** | 95+ Lighthouse |

</div>

---

## 🏆 Benefícios Esperados

### **Para Escritórios**
- **40-60%** redução no tempo administrativo
- **100%** centralização de informações
- **Compliance** automatizado
- **Escalabilidade** para crescimento
- **Flexibilidade** de deploy (on-premise ou SaaS)
- **Controle total** dos dados (versão on-premise)

### **Para Advogados**
- **Foco** no trabalho jurídico
- **Visão clara** dos processos
- **Colaboração** facilitada
- **Mobilidade** total

### **Para Clientes**
- **Transparência** em tempo real
- **Comunicação** multi-canal (WhatsApp, Telegram, Email, SMS)
- **Agilidade** nas respostas
- **Segurança** dos dados
- **Notificações automáticas** de status de processos
- **Acesso facilitado** às informações

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

### **Tecnologias**
- [Turbo](https://turbo.build/) - Build system
- [pnpm](https://pnpm.io/) - Package manager
- [ShadcnUI](https://ui.shadcn.com/) - Componentes UI
- [Radix UI](https://www.radix-ui.com/) - Componentes acessíveis
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TanStack](https://tanstack.com/) - Bibliotecas React
- [Biome](https://biomejs.dev/) - Linting e formatação

### **Comunidade**
- [React](https://react.dev/) - Framework UI
- [Vite](https://vitejs.dev/) - Build tool
- [TypeScript](https://www.typescriptlang.org/) - Tipagem estática
- [Lucide](https://lucide.dev/) - Ícones

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela!**

[![GitHub stars](https://img.shields.io/github/stars/seu-usuario/advocasys?style=social)](https://github.com/seu-usuario/advocasys)
[![GitHub forks](https://img.shields.io/github/forks/seu-usuario/advocasys?style=social)](https://github.com/seu-usuario/advocasys)
[![GitHub issues](https://img.shields.io/github/issues/seu-usuario/advocasys)](https://github.com/seu-usuario/advocasys/issues)

**Desenvolvido com ❤️ pela equipe Advocasys**

</div>

---

*Última atualização: Janeiro 2025*