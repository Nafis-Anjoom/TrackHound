import { ObjectId } from "mongodb";

export default class Track {
    _id: ObjectId;
    name: string;
    creator: {
        _id: ObjectId;
        userName: string;
    };
    rating: number;
    startPos: number;
    endPos: number;
    city: string;
    province: string;
    dateCreated: Date;
}