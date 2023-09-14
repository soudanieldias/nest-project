import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { PostService } from './posts/post.service';
import { UserService } from './users/user.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) {}

  @Get('/healthcheck')
  getHello(): string {
    return this.appService.getHello();
  }

  // USERS ROUTES
  @Get('users/')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @Get('users/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id: Number(id) });
  }

  // POSTS ROUTES
  @Get('posts/')
  async getPosts(): Promise<PostModel[]> {
    return this.postService.posts({});
  }

  @Get('posts/:id')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) });
  }
}
