# Usando una imagen base de Nginx
FROM nginx:1.25.3

# Copiar los archivos del proyecto al directorio de trabajo de Nginx
COPY index.html /usr/share/nginx/html
COPY style.css /usr/share/nginx/html
COPY script.js /usr/share/nginx/html

# Exponer el puerto 80 para acceder a la aplicación web
EXPOSE 80

# Comando para iniciar Nginx y servir la aplicación
CMD ["nginx", "-g", "daemon off;"]
