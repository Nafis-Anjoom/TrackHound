import { BaseHttpController, controller, httpDelete, httpGet, httpPost, httpPut, requestBody, requestParam } from "inversify-express-utils";
import { inject } from "inversify";
import UserService from "../services/user.service";
import User from "../models/user.model";
import 'dotenv/config';
import Submission from "../models/submission.model";

// TODO: handle errors properly

@controller('/user')
export default class UserController extends BaseHttpController {
    userService: UserService;

    constructor(@inject("UserService")  userService: UserService) {
        super();
        this.userService = userService;
    }

    @httpPost('/')
    private async createUser(@requestBody() user: User) {
        try {
            await this.userService.createUser(user);
            return this.json(user, 201);
        } catch(error) {
            return this.internalServerError();
        }
        
    }

    @httpGet('/:id')
    private async getUserById(@requestParam("id") userId: string) {
        try {
            const result = await this.userService.getUser(userId);
            return this.json(result, 200);
        } catch(error) {
            return this.notFound();
        }
    }

    @httpDelete('/:id')
    private async deleteUser(@requestParam("id") userId: string) {
        try {
            await this.userService.deleteUser(userId);
            return this.json({"id": userId}, 200);
        } catch(error) {
            return this.internalServerError();
        }
    }

    @httpPut('/:id')
    private async updateUser(@requestParam("id") userId: string, @requestBody() updatedUser: User) {
        try {
            await this.userService.updateUser(userId, updatedUser);
            return this.json(updatedUser, 200);
        } catch(error) {
            return this.internalServerError();
        }
    }
    
    @httpPost('/submission')
    private async createSubmission(@requestBody() submission: Submission) {
        try {
            await this.userService.createSubmission(submission);
            return this.json(submission);
        } catch(error) {
            return this.internalServerError();
        }
    }
}
