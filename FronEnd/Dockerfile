# imagen oficial de Node.js
FROM node:18-alpine
# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia el resto de los archivos de la aplicación
COPY . .

# Expone el puerto en el que la aplicación escuchará
EXPOSE 3000

#Instala las dependencias de la app
RUN npm install

# Comando para iniciar el servidor web
CMD ["sh", "-c", "npm start"]
# RUN npm start