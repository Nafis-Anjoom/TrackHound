import { Collection, DeleteResult, InsertOneResult, ObjectId } from "mongodb";
import express, { Router } from "express";
import User from "../models/user.model";
import { autoInjectable, singleton } from "tsyringe";
import MongoDBService from "../services/database.service";

@autoInjectable()
@singleton()
export default class UserController {
    users: Collection<User>;
    private router: Router;

    // TODO: figure out why Interface don't work with injectable
    constructor(mongoDbService: MongoDBService) {
        this.users =  mongoDbService.collections.users;
        this.router = express.Router();
        this.router.use(express.json());
    }

    private async createUser(user: User): Promise<InsertOneResult> {
        const result = await this.users.insertOne(user);
        return result;
    }

    private async getUserById(userId: string): Promise<User> {
        const query = { _id: new ObjectId(userId) };
        await this.users.findOne(query);
        const result = (await this.users.findOne<User>(query));
        return result;
    }

    private async deleteUser(userId: string): Promise<DeleteResult> {
        const query = { _id: new ObjectId(userId) };
        const result = await this.users.deleteOne(query);
        return result;
    }

    private async updateUser(userId: string, updatedUser: User) {
        const query = { _id: new ObjectId(userId) };
        const result = await this.users.updateOne(query, { $set: updatedUser });
        return result;
    } 



    public routes(): Router {
        this.router.get("/:id", async (req, res) => {
            const id = req?.params?.id;

            try {
                const result = await this.getUserById(id);
                res.status(200).send(result);
            } catch(error) {
                res.status(400).send(`unable to get user by id: ${id}`);
            }
        });

        this.router.delete("/:id", async (req, res) => {
            const id = req?.params?.id;

            try {
                const result = await this.deleteUser(id);
                res.status(200).send(result);
            } catch(error) {
                res.status(400).send(`unable to delete user by id: ${id}`);
            }
        });

        this.router.post("/", async (req, res) => {
            const user = req.body as User;
            
            try {
                const result = await this.createUser(user);
                res.status(200).send(`successfully created a new user`);
            } catch(error) {
                res.status(400).send("Unable to create user");
            }
        });

        this.router.put("/:id", async (req, res) => {
            const user = req.body as User;
            const id = req?.params?.id;

            try {
                const result = await this.updateUser(id, user);
                res.status(200).send(`successfully updated user`);
            } catch(error) {
                res.status(400).send("Unable to create user");
            }
        });


        return this.router;
    }

}