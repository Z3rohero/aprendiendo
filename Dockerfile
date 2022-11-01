# syntax=docker/dockerfile:1

FROM node:16


WORKDIR  /user/src/app_prueba

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install 
COPY . .


EXPOSE 3000
CMD [ "node", "src/server.js" ]