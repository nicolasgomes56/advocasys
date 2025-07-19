# 🛠️ Advocasys - Documentação Técnica

## 📋 Índice
- [Stack Tecnológica](#-stack-tecnológica)
- [Arquitetura](#-arquitetura)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Configuração de Desenvolvimento](#-configuração-de-desenvolvimento)
- [Banco de Dados](#-banco-de-dados)
- [Segurança](#-segurança)
- [Testes](#-testes)
- [Performance](#-performance)
- [CI/CD](#-cicd)
- [Deploy](#-deploy)
- [APIs](#-apis)
- [Roadmap Técnico](#-roadmap-técnico)

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
│   ├── web/              # Frontend React + Vite
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
│       ├── base.json     # TypeScript base
│       ├── node.json     # TypeScript Node.js
│       ├── react-vite.json # TypeScript React + Vite
│       ├── package.json  # Dependências e exports
│       └── README.md     # Documentação
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

## 🚀 Configuração de Desenvolvimento

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
# Linting e formatação com Biome
pnpm lint

# Formatação apenas
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

## 📚 APIs

### **Documentação**
- **Swagger/OpenAPI**: Documentação interativa
- **Postman Collection**: Coleção de endpoints
- **TypeScript**: Tipos para frontend

### **Guias**
- [Guia de Deploy](DEPLOY.md)
- [Guia de API](API.md)
- [Changelog](CHANGELOG.md)

---

## 👨‍💻 Desenvolvimento

### **Projeto Pessoal**
Este é um projeto desenvolvido por um único desenvolvedor, sem contribuições externas no momento.

### **Padrões de Código**
- **Biome**: Linting e formatação automática
- **TypeScript**: Tipagem estática
- **Conventional Commits**: Padrão de commits
- **Husky**: Git hooks (planejado)

---

## 📋 Roadmap Técnico

### **Fase 1: Foundation (Em Andamento)**
- [x] Setup do monorepo com Turbo
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

## 🎯 Próximas Funcionalidades Técnicas

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

*Última atualização: Janeiro 2025*
