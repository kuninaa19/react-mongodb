FROM node:14-alpine

WORKDIR /usr/local

COPY package*.json ./

RUN npm install
ENV PATH=/usr/local/node_modules/.bin:$PATH
ENV NODE_ENV development
ENV CHOKIDAR_USEPOLLING=true

WORKDIR /usr/local/app
COPY . .

CMD ["npm","start"]