# Configuração do NextAuth

## Variáveis de Ambiente Necessárias

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```env
# NextAuth Configuration
NEXTAUTH_SECRET=your-secret-key-here-change-this-in-production
NEXTAUTH_URL=http://localhost:3000

# API Configuration
API_BASE_URL=http://localhost:3002
```

## Como Gerar NEXTAUTH_SECRET

Execute o seguinte comando para gerar uma chave secreta segura:

```bash
openssl rand -base64 32
```

Ou use um gerador online: https://generate-secret.vercel.app/32

## Configuração Atual

✅ **Corrigido:**

- URL da API agora usa variável de ambiente
- Removido import incorreto do Zod
- Adicionado SessionProvider no layout
- Melhorado tratamento de erros
- Corrigidas inconsistências nos tipos
- Secret agora usa variável de ambiente

## Próximos Passos

1. Crie o arquivo `.env.local` com as variáveis acima
2. Configure sua API backend para responder em `http://localhost:3002/auth/signin`
3. Teste o fluxo de autenticação
