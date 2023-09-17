"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const post_service_1 = require("./posts/post.service");
const user_service_1 = require("./users/user.service");
const swagger_1 = require("@nestjs/swagger");
let AppController = class AppController {
    constructor(appService, postService, userService) {
        this.appService = appService;
        this.postService = postService;
        this.userService = userService;
    }
    getHello() {
        return this.appService.getHello();
    }
    async getUsers() {
        return this.userService.users({});
    }
    async getUserById(id) {
        return this.userService.user({ id: Number(id) });
    }
    async signupUser(userData) {
        return this.userService.createUser(userData);
    }
    async updateUser(id, userData) {
        return this.userService.updateUser({
            where: { id: Number(id) },
            data: userData,
        });
    }
    async deleteUserById(id) {
        return this.userService.deleteUser({ id: Number(id) });
    }
    async getPosts() {
        return this.postService.posts({});
    }
    async getPostById(id) {
        return this.postService.post({ id: Number(id) });
    }
    async addNewPost(postData) {
        return this.postService.createPost(postData);
    }
    async updatePost(id, postData) {
        return this.postService.updatePost({
            where: { id: Number(id) },
            data: postData,
        });
    }
    async deletePostById(id) {
        return this.postService.deletePost({ id: Number(id) });
    }
};
exports.AppController = AppController;
__decorate([
    (0, swagger_1.ApiTags)('healthcheck'),
    (0, common_1.Get)('/healthcheck'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Get)('users/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUsers", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Get)('users/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUserById", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Post)('users/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "signupUser", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiBody)({
        schema: {
            properties: {
                name: { type: 'string' },
                birthDate: { type: 'date' },
                biography: { type: 'string' },
                updatedAt: { type: 'date' },
            },
        },
    }),
    (0, common_1.Put)('users/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateUser", null);
__decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, common_1.Delete)('users/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteUserById", null);
__decorate([
    (0, swagger_1.ApiTags)('Posts'),
    (0, common_1.Get)('posts/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getPosts", null);
__decorate([
    (0, swagger_1.ApiTags)('Posts'),
    (0, common_1.Get)('posts/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getPostById", null);
__decorate([
    (0, swagger_1.ApiTags)('Posts'),
    (0, swagger_1.ApiBody)({
        schema: {
            properties: {
                content: { type: 'string' },
                authorId: { type: 'number' },
            },
        },
    }),
    (0, common_1.Post)('posts/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "addNewPost", null);
__decorate([
    (0, swagger_1.ApiTags)('Posts'),
    (0, swagger_1.ApiBody)({
        schema: {
            properties: {
                content: { type: 'string' },
            },
        },
    }),
    (0, common_1.Put)('posts/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updatePost", null);
__decorate([
    (0, swagger_1.ApiTags)('Posts'),
    (0, common_1.Delete)('/posts/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deletePostById", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService,
        post_service_1.PostService,
        user_service_1.UserService])
], AppController);
//# sourceMappingURL=app.controller.js.map