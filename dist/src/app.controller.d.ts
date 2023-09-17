import { AppService } from './app.service';
import { PostService } from './posts/post.service';
import { UserService } from './users/user.service';
import { User as UserModel, Post as PostModel } from '@prisma/client';
export declare class AppController {
    private readonly appService;
    private readonly postService;
    private readonly userService;
    constructor(appService: AppService, postService: PostService, userService: UserService);
    getHello(): string;
    getUsers(): Promise<UserModel[]>;
    getUserById(id: string): Promise<UserModel>;
    signupUser(userData: {
        name: string;
        email: string;
        birthDate: Date;
        biography: string;
        createdAt: Date;
        updatedAt: Date;
    }): Promise<UserModel>;
    updateUser(id: string, userData: {
        id: number;
        name: string;
        birthDate: Date;
        biography: string;
        updatedAt: Date;
    }): Promise<UserModel>;
    deleteUserById(id: string): Promise<UserModel>;
    getPosts(): Promise<PostModel[]>;
    getPostById(id: string): Promise<PostModel>;
    addNewPost(postData: {
        content: string;
        authorId: number;
    }): Promise<PostModel>;
    updatePost(id: string, postData: {
        content: string;
    }): Promise<PostModel>;
    deletePostById(id: string): Promise<PostModel>;
}
