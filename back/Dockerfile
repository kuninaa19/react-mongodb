FROM node:14-alpine

WORKDIR /usr/local

COPY package*.json ./

RUN npm install && npm cache clean --force
ENV PATH=/usr/local/node_modules/.bin:$PATH
ENV NODE_ENV development
ENV TZ=Asia/Seoul

WORKDIR /usr/local/app
COPY src ./src

CMD ["npm", "start"]
