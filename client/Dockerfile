FROM node:14-alpine

WORKDIR /usr/local

COPY package*.json ./

RUN npm install
ENV PATH=/usr/local/node_modules/.bin:$PATH
ENV NODE_ENV development
ENV TZ=Asia/Seoul

COPY . .

CMD ["npm","start"]