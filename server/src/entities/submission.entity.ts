import { ObjectId } from "mongodb";
import { AutoMap } from '@automapper/classes';

export default class Submission {
  @AutoMap()  
  _id?: ObjectId;
  @AutoMap()
  _trackId: ObjectId;
  @AutoMap()
  _userId: ObjectId;
  @AutoMap()
  time: number;
  @AutoMap()
  rating: number;
  @AutoMap()
  datePosted: Date;

    constructor(
        trackId: string,
        userId: string,
        time: number,
        rating: number,
        datePosted: Date,
        _id?: ObjectId
      ) {
        this._id = _id;
        this._trackId = new ObjectId(trackId);
        this._userId = new ObjectId(userId);
        this.time = time;
        this.rating = rating;
        this.datePosted = datePosted;
      }
}