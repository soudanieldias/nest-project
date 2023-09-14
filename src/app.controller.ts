import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
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

  @Post('users/')
  async signupUser(
    @Body()
    userData: {
      name: string;
      email: string;
      birthDate: Date;
      biography: string;
      createdAt: Date;
      updatedAt: Date;
    },
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }

  @Put('users/:id')
  async updateUser(
    @Param('id') id: string,
    @Body()
    userData: {
      id: number;
      name: string;
      birthDate: Date;
      biography: string;
      updatedAt: Date;
    },
  ): Promise<UserModel> {
    return this.userService.updateUser({
      where: { id: Number(id) },
      data: userData,
    });
  }

  @Delete('users/:id')
  async deleteUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
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

  @Post('posts/')
  async addNewPost(
    @Body()
    postData: {
      content: string;
      authorId: number;
    },
  ): Promise<PostModel> {
    return this.postService.createPost(postData);
  }

  @Put('posts/:id')
  async updatePost(
    @Param('id') id: string,
    @Body()
    postData: {
      content: string;
    },
  ): Promise<PostModel> {
    return this.postService.updatePost({
      where: { id: Number(id) },
      data: postData,
    });
  }

  @Delete('/posts/:id')
  async deletePostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({ id: Number(id) });
  }
}
