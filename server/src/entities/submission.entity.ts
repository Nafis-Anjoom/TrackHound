import { ObjectId } from "mongodb";

export default class Submission {
    _id?: ObjectId;
    _trackId: ObjectId;
    _userId: ObjectId;
    time: number;
    rating: number;
    datePosted: Date;
}