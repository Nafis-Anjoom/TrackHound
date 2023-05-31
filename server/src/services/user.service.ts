import { inject, injectable } from "inversify";
import UserRepository from "../repositories/user.repository";
import UserDTO from "../dto/user.dto";
import { mapper } from "../mappings/mapper";
import User from "../entities/user.entity";
import { ObjectId } from "mongodb";

@injectable()
export default class UserService {

    userRepository: UserRepository;

    constructor(@inject("UserRepository") userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public async createUser(userDTO: UserDTO) {
        const user = mapper.map(userDTO, UserDTO, User);
        const result = await this.userRepository.createUser(user);
        return result;
    }

    public async updateUser(id: string, updatedUser: UserDTO) {
        const user = mapper.map(updatedUser, UserDTO, User);
        await this.userRepository.updateUser(new ObjectId(id), user);
    }

    public async deleteUser(id: string) {
        await this.userRepository.deleteUser(new ObjectId(id));
    }

    public async getUser(id: string) {
        const user = await this.userRepository.getUserById(new ObjectId(id));
        const mappedUser = mapper.map(user, User, UserDTO);
        return mappedUser;
    }
}