import { injectable } from "inversify";
import { Collection, ObjectId } from "mongodb";
import * as dotenv from "dotenv";
import MongoDB from "../mongodb";
import User from "../models/user.model";

@injectable()
export default class UserRepository {
    users: Collection<User>;

    constructor(mongoDb: MongoDB) {
        dotenv.config();
        this.users = mongoDb.getCollection<User>(process.env.USERS_COLLECTION_NAME ?? 'users');
    }

    public async createUser(user: User) {
        const result = await this.users.insertOne(user);
        return result;
    }
    
    public async getUserById(id: ObjectId) {
        const result = await this.users.findOne({ _id: id });
        return result;
    }

    public async updateUser(id: ObjectId, updatedUser: User) {
        const result = await this.users.updateOne({ _id: id }, { $set: updatedUser }, { ignoreUndefined: true });
    }

    public async deleteUser(id: ObjectId) {
        await this.users.deleteOne({ _id: id });
    }
    
}