ARG NODE_VERSION=18.0.0
FROM node:${NODE_VERSION}-alpine as base
WORKDIR /app

COPY package*.json ./
RUN npm install -g nodemon
RUN npm install 

COPY . .

EXPOSE 4000 5000

CMD ["npm", "start"]
