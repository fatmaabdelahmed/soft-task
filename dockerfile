From node:latest

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

Expose 5000

CMD [ "node", "server.js" ]