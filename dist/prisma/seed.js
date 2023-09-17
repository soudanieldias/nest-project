"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const userData = {
    name: 'Daniel Dias',
    email: 'danieldias.b99@hotmail.com',
    birthDate: new Date('1999-07-20T00:00:00'),
    biography: 'Uma simples Biografia de Rede Social.',
};
const postData = {
    content: 'Este é um Exemplo de post criado através do Seed do Banco de dados do Prisma',
    authorId: 1,
};
async function seed() {
    try {
        await prisma.user.create({
            data: userData,
        });
        await prisma.post.create({
            data: postData,
        });
        console.log('Dados inseridos com sucesso!');
    }
    catch (error) {
        console.error('Erro durante a inserção de dados:', error);
    }
    finally {
        await prisma.$disconnect();
    }
}
seed();
//# sourceMappingURL=seed.js.map