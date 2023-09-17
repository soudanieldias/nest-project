FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma db push

RUN ts-node prisma/seed.ts

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/main.js" ]
