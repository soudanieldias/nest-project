import { Controller, Get } from '@nestjs/common';
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

  // POSTS ROUTES
  @Get('posts/')
  async getPosts(): Promise<PostModel[]> {
    return this.postService.posts({});
  }
}
