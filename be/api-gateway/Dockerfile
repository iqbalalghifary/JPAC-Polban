FROM node:16-alpine

WORKDIR /app/jpac/api-gateway

COPY package*.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]