import { ObjectId } from "mongodb";
import { AutoMap } from '@automapper/classes';
import UserPartial from "./userPartial.entity";

export default class Track {
  @AutoMap()  
  _id: ObjectId;
  @AutoMap()
  name: string;
  @AutoMap(() => UserPartial)
  creator: UserPartial;
  @AutoMap()
  rating: number;
  @AutoMap()
  startPos: number;
  @AutoMap()
  endPos: number;
  @AutoMap()
  city: string;
  @AutoMap()
  province: string;
  @AutoMap()
  dateCreated: Date;

    constructor(
        id: string,
        name: string,
        creator: UserPartial,
        rating: number,
        startPos: number,
        endPos: number,
        city: string,
        province: string,
        dateCreated: Date
      ) {
        this._id = new ObjectId(id);
        this.name = name;
        this.creator = creator;
        this.rating = rating;
        this.startPos = startPos;
        this.endPos = endPos;
        this.city = city;
        this.province = province;
        this.dateCreated = dateCreated;
      }
}