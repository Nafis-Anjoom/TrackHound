import { ObjectId } from "mongodb";
import { AutoMap } from '@automapper/classes';

export default class Comment {
    @AutoMap()
    _id: ObjectId;
    @AutoMap()
    _trackId: string;
    @AutoMap()
    body: string;
    @AutoMap()
    datePosted: Date;
    @AutoMap()
    author: {
        id: string;
        userName: String;
    }

    constructor(_id: ObjectId, _trackId: string, body: string, datePosted: Date, author: { id: string; userName: string }) {
        this._id = _id;
        this._trackId = _trackId;
        this.body = body;
        this.datePosted = datePosted;
        this.author = author;
    }
}