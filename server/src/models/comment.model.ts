import { ObjectId } from "mongodb";

export default interface Comment {
    body: string;
    id?: ObjectId;
    datePosted: Date;
    author: {firstName: string, lastName: string, userId: ObjectId};
}