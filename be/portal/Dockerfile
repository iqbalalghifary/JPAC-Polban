FROM node:16-alpine

WORKDIR /app/jpac/portal

COPY package*.json ./

RUN yarn install

COPY . .

CMD [ "yarn", "start" ]