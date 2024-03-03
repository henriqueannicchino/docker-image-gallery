FROM node:21.6-alpine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --silent

COPY . ./

CMD ["npm", "start"]

EXPOSE 3000