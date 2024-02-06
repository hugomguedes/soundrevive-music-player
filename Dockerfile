FROM node

# Configurar o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do Node.js
RUN npm install

# Copiar os arquivos do código-fonte para o diretório de trabalho
COPY . .

# Instalar o Electron como dependência de desenvolvimento
RUN npm install electron --save-dev
