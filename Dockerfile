FROM node:14.14.0-alpine
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
EXPOSE 9000
CMD "node" "app.js"