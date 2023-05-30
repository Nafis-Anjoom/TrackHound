import { ObjectId } from "mongodb";

export default interface Comment {
    _id: ObjectId;
    _trackId: ObjectId;
    body: string;
    datePosted: Date;
    author: {
        _id: ObjectId;
        userName: String;
    }
}