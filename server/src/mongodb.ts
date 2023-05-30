import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { injectable } from "inversify";

@injectable()
export default class MongoDB {
    private client: mongoDB.MongoClient;
    private database: mongoDB.Db;

    async intialize() {
        dotenv.config();
        this.client = new mongoDB.MongoClient(process.env.DB_CONN_STRING); 
        await this.client.connect();
        this.database = this.client.db(process.env.DB_NAME);
    }

    public getCollection<T>(collectionName: string) {
        return this.database.collection<T>(collectionName);
    }
}