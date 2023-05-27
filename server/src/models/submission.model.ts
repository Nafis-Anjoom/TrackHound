import { ObjectId } from "mongodb";

export default interface Submission {
    user: {firstName: string, lastName: string, userId: ObjectId};
    time: number;
    rating: number;
    id?: ObjectId;
}