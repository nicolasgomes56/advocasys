import cors from '@fastify/cors';
import fastify from 'fastify';

const app = fastify({
  logger: true,
});

// Middleware de segurança
app.register(cors, {
  origin: process.env['ALLOWED_ORIGINS']?.split(',') || ['http://localhost:3000'],
  credentials: true,
});

// Health check endpoint
app.get('/health', async (request, reply) => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

// Exemplo de rota com validação
app.get('/api/users', async (request, reply) => {
  try {
    // Simulação de dados de usuários
    const users = [
      { id: 1, email: 'user@example.com', name: 'Usuário Exemplo', createdAt: new Date() },
    ];

    return { users };
  } catch (error) {
    request.log.error(error);
    return reply.status(500).send({ error: 'Internal server error' });
  }
});

// Função para iniciar o servidor
async function start() {
  try {
    await app.listen({ port: 3001, host: '0.0.0.0' });
    console.log('Server running on http://localhost:3001');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
}

// Graceful shutdown
process.on('SIGTERM', async () => {
  await app.close();
  process.exit(0);
});

start();
