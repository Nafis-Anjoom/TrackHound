import { ObjectId } from "mongodb";

export default class User {
    _id?: ObjectId;
    bio: string;
    userName: string;
    firstName: string;
    lastName: string;
    dateJoined: Date;
    tracksCreated?: {
        _id: ObjectId;
        name: string;
        city: string;
        province: string;
        rating: string;
    }[];
    submissions?: {       
        _id: ObjectId;
        track: {
            _id: ObjectId;
            name: string;
            city: string;
            province: string;
        } 
        time: number;
        rating: number;
        datePosted: Date;
    }[];
}