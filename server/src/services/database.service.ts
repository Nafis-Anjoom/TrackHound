import * as mongoDB from "mongodb";
import { Collection } from "mongodb";
import * as dotenv from "dotenv";
import IMongoDbService from "./imongodb.service";
import ICollections from "./icollections";
import User from "../models/user.model";

export default class MongoDBService implements IMongoDbService {
    collections: ICollections = {};

    private client: mongoDB.MongoClient;
    
    constructor() {
        dotenv.config();
        this.client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);  
    }

    async intialize() {
        await this.client.connect();
        const db: mongoDB.Db = this.client.db(process.env.DB_NAME);
        this.collections.comments = db.collection(process.env.COMMENTS_COLLECTION_NAME);
        console.log(`Successfully connected to database: ${db.databaseName} and collection: ${process.env.COMMENTS_COLLECTION_NAME}`);
        this.collections.users = db.collection(process.env.USERS_COLLECTION_NAME);
        console.log(`Successfully connected to database: ${db.databaseName} and collection: ${process.env.USERS_COLLECTION_NAME}`);
        this.collections.tracks = db.collection(process.env.TRACKS_COLLECTION_NAME);
        console.log(`Successfully connected to database: ${db.databaseName} and collection: ${process.env.TRACKS_COLLECTION_NAME}`);
        this.collections.submissions = db.collection(process.env.SUBMISSIONS_COLLECTION_NAME);
        console.log(`Successfully connected to database: ${db.databaseName} and collection: ${process.env.SUBMISSIONS_COLLECTION_NAME}`);
    }
}