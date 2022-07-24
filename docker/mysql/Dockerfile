FROM node:16.3.0
WORKDIR .
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
RUN npm run prisma:generate
RUN npm run build
CMD [ "npm", "run", "start" ]
