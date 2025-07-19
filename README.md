<!-- <div id="header" align="center">
  <img src="https://i.imgur.com/8JZqX3L.png" width="800" height="400" alt="Advocasys Banner">
</div> -->

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

### [🔗 Demo em Desenvolvimento](#) | [📖 Documentação Técnica](project-structure.md)

> **💡 Para desenvolvedores**: Consulte a [documentação técnica completa](project-structure.md) para detalhes sobre arquitetura, stack tecnológica, configuração e desenvolvimento.

## 📋 Descrição

**Advocasys** é uma solução moderna e completa para gestão de escritórios de advocacia, desenvolvida com tecnologias de ponta. O projeto utiliza princípios de **Domain-Driven Design (DDD)** e **Test-Driven Development (TDD)** para oferecer uma experiência excepcional tanto para advogados quanto para clientes.

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

## 📋 Roadmap

### **Fase 1: Foundation (Em Andamento)**
- [x] Setup do monorepo com Turbo
- [x] Configuração do frontend React
- [x] Componentes UI com Radix
- [x] Configuração de linting com Biome
- [x] Setup do backend Fastify
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

## 👨‍💻 Desenvolvimento

Este é um projeto pessoal desenvolvido por um único desenvolvedor. A documentação técnica completa está disponível em [project-structure.md](project-structure.md).

---

<div align="center">

**Desenvolvido com ❤️ por um desenvolvedor apaixonado**

</div>

---

*Última atualização: Janeiro 2025*