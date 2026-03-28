# imagem base
FROM node:20

# diretório dentro do container
WORKDIR /app

# copiar dependências
COPY package*.json ./

# instalar dependências
RUN npm install

# copiar restante do código
COPY . .

# expor porta
EXPOSE 3000

# comando para rodar
CMD ["npm", "run", "dev"]