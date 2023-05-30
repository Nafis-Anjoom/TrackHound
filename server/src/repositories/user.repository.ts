import { injectable } from "inversify";
import { Collection, ObjectId } from "mongodb";
import * as dotenv from "dotenv";
import MongoDB from "../mongodb";
import User from "../entities/user.entity";

@injectable()
export default class UserRepository {
    users: Collection<User>;

    constructor(mongoDb: MongoDB) {
        dotenv.config();
        this.users = mongoDb.getCollection<User>(process.env.USERS_COLLECTION_NAME);
    }

    public async createUser(user: User) {
        const result = await this.users.insertOne(user);
    }
    
    public async getUserById(id: ObjectId): Promise<User> {
        const result = await this.users.findOne({ _id: id });
        return result;
    }

    public async updateUser(id: ObjectId, updatedUser: User) {
        const result = await this.users.updateOne(id, { $set: updatedUser });
    }

    public async deleteUser(id: ObjectId) {
        const result = await this.users.deleteOne(id);
    }
    
}