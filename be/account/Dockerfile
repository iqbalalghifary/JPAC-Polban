FROM node:alpine

RUN mkdir -p /usr/jpac/account

WORKDIR /usr/jpac/account

COPY package*.json ./

RUN yarn install

COPY . .

CMD yarn start:dev