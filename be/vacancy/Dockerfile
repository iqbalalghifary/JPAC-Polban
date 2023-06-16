FROM node:16-alpine

WORKDIR /app/jpac/vacancy

COPY package*.json ./

RUN yarn install

COPY . .

CMD [ "yarn", "start" ]