FROM node:alpine

RUN mkdir -p /usr/jpac/email

WORKDIR /usr/jpac/email

COPY package*.json ./

RUN yarn install

COPY . .

CMD yarn start:dev