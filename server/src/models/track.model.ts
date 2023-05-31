import { ObjectId } from 'mongodb';
import UserPartial from './userPartial.model';

export default interface Track {
    name: string;
    creator: UserPartial;
    rating: number;
    startPos: number;
    endPos: number;
    city: string;
    province: string;
    dateCreated: Date;
}