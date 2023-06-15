FROM node:alpine

RUN npm install -g yarn

RUN mkdir -p /usr/jpac/vacancy

WORKDIR /usr/jpac/vacancy

COPY package*.json ./

RUN yarn install

COPY . .

CMD yarn start:dev