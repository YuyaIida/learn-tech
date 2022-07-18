FROM node:16.3.0-alpine
WORKDIR .
COPY package*.json ./
RUN npm install --only=production
COPY . .
EXPOSE 8080
CMD [ "node", "src/server.js" ]
