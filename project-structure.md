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

### **Build Tools & Configuração**
| Tecnologia | Propósito |
|------------|-----------|
| **TypeScript** | Tipagem estática |
| **Biome** | Linting e formatação |
| **pnpm** | Package manager |

### **Frontend (Client)**
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

### **Backend (Server)**
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

### **Estrutura Client/Server**
```
/advocasys
├── client/                 # Frontend React + Vite
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/         # Componentes ShadcnUI
│   │   │   ├── forms/      # Formulários
│   │   │   ├── layout/     # Componentes de layout
│   │   │   └── charts/     # Componentes de gráficos
│   │   ├── pages/          # Páginas da aplicação
│   │   ├── hooks/          # Custom hooks
│   │   ├── utils/          # Utilitários
│   │   ├── services/       # Serviços de API
│   │   ├── types/          # Tipos TypeScript
│   │   ├── styles/         # Estilos globais
│   │   └── lib/            # Configurações de bibliotecas
│   ├── public/
│   ├── package.json
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── .env
├── server/                 # Backend Fastify - Clean Architecture
│   ├── src/
│   │   ├── core/           # 🎯 Camada de Domínio (Core Business)
│   │   │   ├── domain/     # Entidades e regras de negócio
│   │   │   │   ├── entities/
│   │   │   │   │   ├── User.ts
│   │   │   │   │   ├── Client.ts
│   │   │   │   │   ├── Process.ts
│   │   │   │   │   ├── Contract.ts
│   │   │   │   │   └── Payment.ts
│   │   │   │   ├── value-objects/
│   │   │   │   │   ├── Email.ts
│   │   │   │   │   ├── CPF.ts
│   │   │   │   │   ├── CNPJ.ts
│   │   │   │   │   ├── Money.ts
│   │   │   │   │   └── DateRange.ts
│   │   │   │   ├── aggregates/
│   │   │   │   │   ├── ProcessAggregate.ts
│   │   │   │   │   └── ContractAggregate.ts
│   │   │   │   ├── events/
│   │   │   │   │   ├── DomainEvent.ts
│   │   │   │   │   ├── ProcessCreatedEvent.ts
│   │   │   │   │   └── PaymentReceivedEvent.ts
│   │   │   │   └── errors/
│   │   │   │       ├── DomainError.ts
│   │   │   │       └── BusinessRuleViolation.ts
│   │   │   ├── repositories/  # Interfaces dos repositórios
│   │   │   │   ├── IUserRepository.ts
│   │   │   │   ├── IClientRepository.ts
│   │   │   │   ├── IProcessRepository.ts
│   │   │   │   ├── IContractRepository.ts
│   │   │   │   └── IPaymentRepository.ts
│   │   │   └── services/   # Serviços de domínio
│   │   │       ├── UserService.ts
│   │   │       ├── ProcessService.ts
│   │   │       ├── ContractService.ts
│   │   │       └── PaymentService.ts
│   │   ├── application/    # 🎯 Camada de Aplicação
│   │   │   ├── use-cases/  # Casos de uso
│   │   │   │   ├── users/
│   │   │   │   │   ├── CreateUserUseCase.ts
│   │   │   │   │   ├── UpdateUserUseCase.ts
│   │   │   │   │   ├── DeleteUserUseCase.ts
│   │   │   │   │   └── AuthenticateUserUseCase.ts
│   │   │   │   ├── clients/
│   │   │   │   │   ├── CreateClientUseCase.ts
│   │   │   │   │   ├── UpdateClientUseCase.ts
│   │   │   │   │   └── GetClientUseCase.ts
│   │   │   │   ├── processes/
│   │   │   │   │   ├── CreateProcessUseCase.ts
│   │   │   │   │   ├── UpdateProcessUseCase.ts
│   │   │   │   │   └── GetProcessUseCase.ts
│   │   │   │   ├── contracts/
│   │   │   │   │   ├── CreateContractUseCase.ts
│   │   │   │   │   ├── UpdateContractUseCase.ts
│   │   │   │   │   └── GetContractUseCase.ts
│   │   │   │   └── payments/
│   │   │   │       ├── CreatePaymentUseCase.ts
│   │   │   │       ├── UpdatePaymentUseCase.ts
│   │   │   │       └── GetPaymentUseCase.ts
│   │   │   ├── dto/        # Data Transfer Objects
│   │   │   │   ├── CreateUserDto.ts
│   │   │   │   ├── UpdateUserDto.ts
│   │   │   │   ├── CreateClientDto.ts
│   │   │   │   ├── CreateProcessDto.ts
│   │   │   │   └── CreateContractDto.ts
│   │   │   ├── validators/ # Validadores de entrada
│   │   │   │   ├── UserValidator.ts
│   │   │   │   ├── ClientValidator.ts
│   │   │   │   ├── ProcessValidator.ts
│   │   │   │   └── ContractValidator.ts
│   │   │   └── events/     # Eventos de aplicação
│   │   │       ├── ApplicationEvent.ts
│   │   │       └── handlers/
│   │   │           ├── ProcessCreatedHandler.ts
│   │   │           └── PaymentReceivedHandler.ts
│   │   ├── infrastructure/ # 🎯 Camada de Infraestrutura
│   │   │   ├── database/   # Implementações de banco
│   │   │   │   ├── prisma/
│   │   │   │   │   ├── PrismaUserRepository.ts
│   │   │   │   │   ├── PrismaClientRepository.ts
│   │   │   │   │   ├── PrismaProcessRepository.ts
│   │   │   │   │   ├── PrismaContractRepository.ts
│   │   │   │   │   └── PrismaPaymentRepository.ts
│   │   │   │   ├── migrations/
│   │   │   │   └── seeders/
│   │   │   ├── auth/       # Autenticação e autorização
│   │   │   │   ├── JwtService.ts
│   │   │   │   ├── PasswordService.ts
│   │   │   │   ├── AuthMiddleware.ts
│   │   │   │   └── RoleGuard.ts
│   │   │   ├── external/   # Serviços externos
│   │   │   │   ├── EmailService.ts
│   │   │   │   ├── WhatsAppService.ts
│   │   │   │   ├── TelegramService.ts
│   │   │   │   └── SMSService.ts
│   │   │   ├── storage/    # Armazenamento de arquivos
│   │   │   │   ├── FileStorageService.ts
│   │   │   │   ├── LocalStorageService.ts
│   │   │   │   └── S3StorageService.ts
│   │   │   ├── cache/      # Cache e Redis
│   │   │   │   ├── CacheService.ts
│   │   │   │   └── RedisService.ts
│   │   │   └── logging/    # Sistema de logs
│   │   │       ├── LoggerService.ts
│   │   │       └── AuditService.ts
│   │   ├── presentation/   # 🎯 Camada de Apresentação
│   │   │   ├── http/       # Controllers e rotas HTTP
│   │   │   │   ├── controllers/
│   │   │   │   │   ├── UserController.ts
│   │   │   │   │   ├── ClientController.ts
│   │   │   │   │   ├── ProcessController.ts
│   │   │   │   │   ├── ContractController.ts
│   │   │   │   │   └── PaymentController.ts
│   │   │   │   ├── routes/
│   │   │   │   │   ├── userRoutes.ts
│   │   │   │   │   ├── clientRoutes.ts
│   │   │   │   │   ├── processRoutes.ts
│   │   │   │   │   ├── contractRoutes.ts
│   │   │   │   │   └── paymentRoutes.ts
│   │   │   │   ├── middleware/
│   │   │   │   │   ├── errorHandler.ts
│   │   │   │   │   ├── requestLogger.ts
│   │   │   │   │   ├── rateLimiter.ts
│   │   │   │   │   └── cors.ts
│   │   │   │   ├── swagger/
│   │   │   │   │   ├── swaggerConfig.ts
│   │   │   │   │   └── schemas/
│   │   │   │   └── responses/
│   │   │   │       ├── ApiResponse.ts
│   │   │   │       └── ErrorResponse.ts
│   │   │   ├── websocket/  # WebSocket handlers (futuro)
│   │   │   └── graphql/    # GraphQL resolvers (futuro)
│   │   ├── shared/         # 🎯 Código Compartilhado
│   │   │   ├── utils/      # Utilitários gerais
│   │   │   │   ├── DateUtils.ts
│   │   │   │   ├── StringUtils.ts
│   │   │   │   ├── ValidationUtils.ts
│   │   │   │   └── CryptoUtils.ts
│   │   │   ├── constants/  # Constantes do sistema
│   │   │   │   ├── AppConstants.ts
│   │   │   │   ├── ErrorMessages.ts
│   │   │   │   └── StatusCodes.ts
│   │   │   ├── types/      # Tipos compartilhados
│   │   │   │   ├── ApiTypes.ts
│   │   │   │   ├── DatabaseTypes.ts
│   │   │   │   └── ExternalTypes.ts
│   │   │   └── errors/     # Erros customizados
│   │   │       ├── AppError.ts
│   │   │       ├── ValidationError.ts
│   │   │       ├── NotFoundError.ts
│   │   │       └── UnauthorizedError.ts
│   │   ├── config/         # Configurações
│   │   │   ├── database.ts
│   │   │   ├── auth.ts
│   │   │   ├── app.ts
│   │   │   └── environment.ts
│   │   └── app.ts          # Configuração principal
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   ├── tests/              # Testes organizados por camada
│   │   ├── unit/           # Testes unitários
│   │   │   ├── core/
│   │   │   ├── application/
│   │   │   └── infrastructure/
│   │   ├── integration/    # Testes de integração
│   │   │   ├── database/
│   │   │   ├── api/
│   │   │   └── external/
│   │   └── e2e/            # Testes end-to-end
│   ├── package.json
│   ├── tsconfig.json
│   └── .env
├── shared/                 # Código compartilhado (opcional)
│   ├── types/              # Tipos compartilhados
│   ├── utils/              # Utilitários compartilhados
│   └── constants/          # Constantes compartilhadas
├── .github/                # Workflows CI/CD
│   └── workflows/
│       ├── client.yml
│       └── server.yml
├── docker-compose.yml      # Orquestração de containers
├── .gitignore
└── README.md
```

### **Princípios Arquiteturais**

#### **Clean Architecture - Camadas**
1. **🎯 Core (Domínio)**: Regras de negócio puras, independentes de frameworks
2. **🎯 Application**: Casos de uso e orquestração
3. **🎯 Infrastructure**: Implementações concretas (banco, APIs externas)
4. **🎯 Presentation**: Controllers, rotas e interfaces de usuário

#### **Domain-Driven Design (DDD)**
- **Entidades**: Objetos com identidade (User, Client, Process)
- **Value Objects**: Objetos imutáveis (Email, CPF, Money)
- **Aggregates**: Agregações com invariantes (ProcessAggregate)
- **Repositories**: Abstração de acesso a dados
- **Domain Services**: Lógica de domínio complexa
- **Domain Events**: Eventos de domínio para comunicação

#### **SOLID Principles**
- **S** - Single Responsibility: Cada classe tem uma responsabilidade
- **O** - Open/Closed: Aberto para extensão, fechado para modificação
- **L** - Liskov Substitution: Substituição de implementações
- **I** - Interface Segregation: Interfaces específicas
- **D** - Dependency Inversion: Dependências de abstrações

#### **Test-Driven Development (TDD)**
- **Testes Unitários**: Cobertura completa por camada
- **Testes de Integração**: Validação de fluxos entre camadas
- **Testes E2E**: Validação de cenários completos
- **Red-Green-Refactor**: Ciclo de desenvolvimento

---

## 🚀 Configuração de Desenvolvimento

### **Pré-requisitos**
- Node.js 18+
- pnpm
- Git
- PostgreSQL

### **1. Clone o Repositório**
```bash
git clone https://github.com/seu-usuario/advocasys.git
cd advocasys
```

### **2. Configure o Banco de Dados**
```bash
# Instale o PostgreSQL (se necessário)
# Configure as variáveis de ambiente do servidor
cp server/.env.example server/.env
# Edite server/.env com suas configurações de banco
```

### **3. Configure o Servidor**
```bash
cd server
pnpm install
npx prisma generate
npx prisma migrate dev
pnpm dev
```

### **4. Configure o Cliente**
```bash
# Em outro terminal
cd client
pnpm install
cp .env.example .env
# Edite client/.env com a URL da API
pnpm dev
```

### **5. Acesse a Aplicação**
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001
- **Swagger Docs**: http://localhost:3001/docs

### **6. Scripts Úteis**
```bash
# Desenvolvimento
pnpm --filter client dev    # Inicia apenas o cliente
pnpm --filter server dev    # Inicia apenas o servidor
pnpm dev                    # Inicia ambos (se configurado)

# Build
pnpm --filter client build  # Build do cliente
pnpm --filter server build  # Build do servidor

# Testes
pnpm --filter client test   # Testes do cliente
pnpm --filter server test   # Testes do servidor
```

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

### **Frontend (Client)**
```bash
cd client
# Testes unitários
pnpm test

# Testes com UI
pnpm test:ui

# Testes E2E
pnpm test:e2e
```

### **Backend (Server)**
```bash
cd server
# Testes unitários
pnpm test

# Testes com coverage
pnpm test:coverage

# Testes em modo watch
pnpm test:watch
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
- **Code Splitting**: Divisão de código
- **Lazy Loading**: Carregamento sob demanda
- **Image Optimization**: Otimização de imagens
- **Bundle Analysis**: Análise de bundle

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
# Workflow do cliente
- Lint e formatação com Biome
- Verificação de tipos TypeScript
- Testes automatizados
- Build de produção
- Deploy automático

# Workflow do servidor
- Lint e formatação
- Verificação de tipos
- Testes automatizados
- Build de produção
- Deploy automático
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
- [x] Setup da estrutura client/server
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
