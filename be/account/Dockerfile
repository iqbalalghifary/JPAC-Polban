FROM node:16-alpine

WORKDIR /app/jpac/account

COPY package*.json ./

RUN yarn install

COPY . .

CMD [ "yarn", "start:dev" ]