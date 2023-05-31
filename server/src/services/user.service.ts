import { inject, injectable } from "inversify";
import UserRepository from "../repositories/user.repository";
import User from "../models/user.model";
import { ObjectId } from "mongodb";

@injectable()
export default class UserService {

    userRepository: UserRepository;

    constructor(@inject("UserRepository") userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async createUser(user: User) {
        const result = await this.userRepository.createUser(user);
        return result;
    }

    public async updateUser(id: string, updatedUser: User) {
        await this.userRepository.updateUser(new ObjectId(id), updatedUser);
    }

    public async deleteUser(id: string) {
        await this.userRepository.deleteUser(new ObjectId(id));
    }

    public async getUser(id: string) {
        const user = await this.userRepository.getUserById(new ObjectId(id));
        return user;
    }
}