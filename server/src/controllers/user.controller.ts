import { BaseHttpController, controller, httpDelete, httpGet, httpPost, httpPut, requestBody, requestParam } from "inversify-express-utils";
import { inject } from "inversify";
import UserService from "../services/user.service";
import UserDTO from "../dto/user.dto";
import 'dotenv/config';

// TODO: handle errors properly

@controller('/user')
export default class UserController extends BaseHttpController {
    userService: UserService;

    constructor(@inject("UserService")  userService: UserService) {
        super();
        this.userService = userService;
    }

    @httpPost('/')
    private async createUser(@requestBody() user: UserDTO) {
        try {
            const result = await this.userService.createUser(user);
            user.id = result.insertedId.toString();
            return this.created(`${process.env.URL || 'localhost:4321'}/user/${user.id}`, user);
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
            const result = await this.userService.deleteUser(userId);
            return this.ok({"id": userId});
        } catch(error) {
            return this.internalServerError();
        }
    }

    @httpPut('/:id')
    private async updateUser(@requestParam("id") userId: string, @requestBody() updatedUser: UserDTO) {
        try {
            const result = await this.userService.updateUser(userId, updatedUser);
            return this.ok(updatedUser);
        } catch(error) {
            return this.internalServerError();
        }
    } 
}