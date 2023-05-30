import { controller, httpDelete, httpGet, httpPost, httpPut, requestBody, requestParam } from "inversify-express-utils";
import { inject } from "inversify";
import UserService from "../services/user.service";
import UserDTO from "../dto/user.dto";

@controller('/user')
export default class UserController {
    userService: UserService;

    constructor(@inject("UserService")  userService: UserService) {
        this.userService = userService;
    }

    @httpPost('/')
    private async createUser(@requestBody() user: UserDTO) {
        
    }

    @httpGet('/:id')
    private async getUserById(@requestParam("id") userId: string) {
        
    }

    @httpDelete('/:id')
    private async deleteUser(@requestParam("id") userId: string) {
        
    }

    @httpPut('/:id')
    private async updateUser(@requestParam("id") userId: string, @requestBody() updatedUser: UserDTO) {
       
    } 
}