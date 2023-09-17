FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma db push

RUN npm run build

EXPOSE 3000

# CMD [ "node", "dist/main.js" ]
RUN npm run start:prod
