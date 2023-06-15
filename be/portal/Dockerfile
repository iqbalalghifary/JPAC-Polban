FROM node:alpine

RUN mkdir -p /usr/jpac/portal

WORKDIR /usr/jpac/portal

COPY package*.json ./

RUN yarn install

COPY . .

CMD yarn start:dev