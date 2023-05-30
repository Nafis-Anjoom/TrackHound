import { inject, injectable } from "inversify";
import UserRepository from "../repositories/user.repository";
import UserDTO from "../dto/user.dto";

@injectable()
export default class UserService {

    userRepository: UserRepository;

    constructor(@inject("UserRepository") userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    public createUser(userDTO: UserDTO) {
        
    }

    public updateUser(id: string, updatedUser: UserDTO) {

    }

    public deleteUser(id: string) {

    }

    public getUser(id: string) {
        
    }
    
    
    
}