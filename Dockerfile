# Stage 1: Builder
FROM node:23-alpine AS builder

WORKDIR /app

# Copiar apenas os arquivos necessários para instalar dependências
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar o restante do código-fonte
COPY . .

# Compilar a aplicação
RUN npm run build

# Stage 2: Production
FROM node:23-alpine AS production

# Definir NODE_ENV como production
ENV NODE_ENV=production

WORKDIR /app

# Copiar apenas package.json e package-lock.json
COPY package*.json ./

# Instalar apenas dependências de produção
RUN npm ci --omit=dev

# Copiar código compilado do estágio builder
COPY --from=builder /app/dist ./dist

# Expor a porta que a aplicação usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "dist/main"]
