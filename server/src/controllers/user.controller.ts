import { Collection, DeleteResult, InsertOneResult, ObjectId } from "mongodb";
import User from "../models/user.model";
import MongoDBService from "../services/database.service";
import { controller, httpDelete, httpGet, httpPost, httpPut, requestBody, requestParam } from "inversify-express-utils";
import { inject } from "inversify";

@controller('/user')
export default class UserController {
    users: Collection<User>;

    constructor(@inject("MongoDBService")  mongoDbService: MongoDBService) {
        this.users =  mongoDbService.collections.users;
    }

    @httpPost('/')
    private async createUser(@requestBody() user: User): Promise<InsertOneResult> {
        const result = await this.users.insertOne(user);
        return result;
    }

    @httpGet('/:id')
    private async getUserById(@requestParam("id") userId: string): Promise<User> {
        const query = { _id: new ObjectId(userId) };
        await this.users.findOne(query);
        const result = (await this.users.findOne<User>(query));
        return result;
    }

    @httpDelete('/:id')
    private async deleteUser(@requestParam("id") userId: string): Promise<DeleteResult> {
        const query = { _id: new ObjectId(userId) };
        const result = await this.users.deleteOne(query);
        return result;
    }

    @httpPut('/:id')
    private async updateUser(@requestParam("id") userId: string, @requestBody() updatedUser: User) {
        const query = { _id: new ObjectId(userId) };
        const result = await this.users.updateOne(query, { $set: updatedUser });
        return result;
    } 
}