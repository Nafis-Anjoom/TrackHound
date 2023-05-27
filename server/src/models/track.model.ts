import { ObjectId } from "mongodb";

export default interface Track {
    name: string;
    creator: string;
    rating: number;
    startPos: number;
    endPos: number;
    dateCreated: Date;
    comments: ObjectId[];
    submissions: ObjectId[];
    id?: ObjectId;
}