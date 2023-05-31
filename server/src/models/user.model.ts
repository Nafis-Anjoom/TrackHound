import { ObjectId } from "mongodb";
import SubmissionPartial from "./submissionPartial.model";
import TrackPartial from "./trackPartial.model";

export default interface User {
  bio: string;
  userName: string;
  firstName: string;
  lastName: string;
  dateJoined: Date;
  tracksCreated?: TrackPartial[];
  submissions?: SubmissionPartial[];
}