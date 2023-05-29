import "reflect-metadata";
import * as bodyParser from 'body-parser';
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import MongoDBService from "./services/database.service";
import * as dotenv from "dotenv";

import './controllers/user.controller';

export async function main() {
    dotenv.config();
    const container = new Container();

    const mongodb = new MongoDBService();
    await mongodb.intialize();
    container.bind<MongoDBService>("MongoDBService").toDynamicValue(() => mongodb).inSingletonScope();

    const server = new InversifyExpressServer(container);
    server.setConfig((app) => {
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    })

    const app = server.build();

    app.listen(process.env.PORT, () => {
        console.log(`server running on port:${process.env.PORT}`);
    });
}

main();
