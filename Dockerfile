# Etapa 1: Construcción de la aplicación React
FROM node:20-alpine AS build

# Definir el directorio de trabajo
WORKDIR /app

# Copiar los archivos de dependencias
COPY package.json package-lock.json ./

# Instalar dependencias sin modificar package-lock.json
RUN npm ci

# Copiar el resto del código
COPY . .

# Construir la aplicación React
RUN npm run build

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copiar los archivos de React al directorio de Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Configurar Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80 para Colify
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
