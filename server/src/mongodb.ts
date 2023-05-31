import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { injectable } from "inversify";

@injectable()
export default class MongoDB {
    private client: mongoDB.MongoClient;

    constructor() {
        dotenv.config();
        this.client = new mongoDB.MongoClient(process.env.DB_CONN_STRING ?? ""); 
    }

    async intialize() {   
        await this.client.connect();
        
    }

    public getCollection<T extends mongoDB.BSON.Document>(collectionName: string) {
        const database = this.client.db(process.env.DB_NAME);
        return database.collection<T>(collectionName);
    }
}