FROM node:alpine

RUN mkdir -p /usr/jpac/api-gateway

WORKDIR /usr/jpac/api-gateway

COPY package*.json ./

RUN yarn install

COPY . .

CMD yarn start:dev