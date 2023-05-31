import { ObjectId } from "mongodb";
import UserPartial from "./userPartial.model";

export default interface Comment {
  _id?: ObjectId;
  trackId: string;
  body: string;
  datePosted: Date;
  author: UserPartial;
}