import "reflect-metadata";
import * as bodyParser from 'body-parser';
import { Container } from "inversify";
import { InversifyExpressServer } from "inversify-express-utils";
import MongoDB from "./mongodb";
import 'dotenv/config';

import UserService from "./services/user.service";
import UserRepository from "./repositories/user.repository";
import TrackRepository from "./repositories/track.repository";
import TrackService from "./services/track.service";
import CommentRepository from "./repositories/comment.repository";

import './controllers/user.controller';
import './controllers/track.controller';
import SubmissionRepository from "./repositories/submission.repository";

export async function main() {
    const container = new Container({ autoBindInjectable: true });

    // intialize async mongo service and inject as singleton
    const mongodb = new MongoDB();
    await mongodb.intialize();

    // TODO: investigate why dependencies cannot by bound to self
    container.bind<MongoDB>("MongoDB").toDynamicValue(() => mongodb).inSingletonScope();
    container.bind<TrackService>("TrackService").to(TrackService).inSingletonScope();
    container.bind<TrackRepository>("TrackRepository").to(TrackRepository).inSingletonScope();
    container.bind<UserService>("UserService").to(UserService).inSingletonScope();
    container.bind<UserRepository>("UserRepository").to(UserRepository).inSingletonScope();
    container.bind<CommentRepository>("CommentRepository").to(CommentRepository).inSingletonScope();
    container.bind<SubmissionRepository>("SubmissionRepository").to(SubmissionRepository).inSingletonScope();

    // initialize express app
    const server = new InversifyExpressServer(container);
    server.setConfig((app) => {
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());
    })

    // run the server
    const app = server.build();

    app.listen(process.env.PORT, () => {
        console.log(`server running on port:${process.env.PORT}`);
    });
}

main();
