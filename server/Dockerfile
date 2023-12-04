
FROM node:18-alpine

RUN mkdir -p /usr/src/bomba-api
WORKDIR /usr/src/bomba-api

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3000

CMD ["npm", "start"]