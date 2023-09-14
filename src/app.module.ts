import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostService } from './posts/post.service';
import { UserService } from './users/user.service';

@Module({
  imports: [],
  controllers: [AppController], // Controllers das Rotas de acesso a Dados
  providers: [AppService, PostService, UserService, PrismaService], // Provedor de Dados que se conectam ao DB
})
export class AppModule {}
