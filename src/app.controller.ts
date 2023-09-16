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
import { ApiBody, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly postService: PostService,
    private readonly userService: UserService,
  ) {}

  @ApiTags('healthcheck')
  @Get('/healthcheck')
  getHello(): string {
    return this.appService.getHello();
  }

  // USERS ROUTES
  @ApiTags('Users')
  @Get('users/')
  async getUsers(): Promise<UserModel[]> {
    return this.userService.users({});
  }

  @ApiTags('Users')
  @Get('users/:id')
  async getUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.user({ id: Number(id) });
  }

  @ApiTags('Users')
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

  @ApiTags('Users')
  @ApiBody({
    schema: {
      properties: {
        name: { type: 'string' },
        birthDate: { type: 'date' },
        biography: { type: 'string' },
        updatedAt: { type: 'date' },
      },
    },
  })
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

  @ApiTags('Users')
  @Delete('users/:id')
  async deleteUserById(@Param('id') id: string): Promise<UserModel> {
    return this.userService.deleteUser({ id: Number(id) });
  }

  // POSTS ROUTES
  @ApiTags('Posts')
  @Get('posts/')
  async getPosts(): Promise<PostModel[]> {
    return this.postService.posts({});
  }

  @ApiTags('Posts')
  @Get('posts/:id')
  async getPostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.post({ id: Number(id) });
  }

  @ApiTags('Posts')
  @ApiBody({
    schema: {
      properties: {
        content: { type: 'string' },
        authorId: { type: 'number' },
      },
    },
  })
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

  @ApiTags('Posts')
  @ApiBody({
    schema: {
      properties: {
        content: { type: 'string' },
      },
    },
  })
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

  @ApiTags('Posts')
  @Delete('/posts/:id')
  async deletePostById(@Param('id') id: string): Promise<PostModel> {
    return this.postService.deletePost({ id: Number(id) });
  }
}
