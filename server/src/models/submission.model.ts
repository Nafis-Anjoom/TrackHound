import { ObjectId } from "mongodb";

export default interface Submission {
  _id?: ObjectId;
  trackId: string;
  userId: string;
  time: number;
  rating: number;
  datePosted: Date;
}