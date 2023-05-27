import { ObjectId } from "mongodb";

export default interface User {
    id?: ObjectId;
    firstName: string;
    lastName: string;
    dateJoined: Date;
    tracksCreatd: ObjectId[];
    submissions: ObjectId[];
}