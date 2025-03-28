# Usa una imagen oficial de Node.js para construir la app de React
FROM node:18 AS build

# Establece el directorio de trabajo
WORKDIR /usr/local/app

# Copia el archivo de dependencias de React
COPY package.json package-lock.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el código fuente de la aplicación React
COPY src ./src
COPY public ./public

# Construye la aplicación React
RUN npm run build

# Usa una imagen Nginx para servir la aplicación construida
FROM nginx:alpine

# Copia los archivos construidos de React desde la etapa anterior
COPY --from=build /usr/local/app/build /usr/share/nginx/html

# Expone el puerto 80 para servir la aplicación
EXPOSE 80

# Usa Nginx para servir la aplicación
CMD ["nginx", "-g", "daemon off;"]

