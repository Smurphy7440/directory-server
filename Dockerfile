FROM node:14

# App Directory
WORKDIR /usr/src/app

COPY package*.json ./

COPY patches ./patches

RUN npm install --unsafe-perm

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]


