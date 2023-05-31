import { ObjectId } from "mongodb";
import TrackPartial from "./trackPartial.entity";
import SubmissionPartial from "./submissionPartial.entity";
import { AutoMap } from "@automapper/classes";

export default class User {
    @AutoMap()
    _id?: ObjectId;
    @AutoMap()
    bio: string;
    @AutoMap()
    userName: string;
    @AutoMap()
    firstName: string;
    @AutoMap()
    lastName: string;
    @AutoMap()
    dateJoined: Date;
    @AutoMap(() => [TrackPartial])
    tracksCreated?: TrackPartial[];
    @AutoMap(() => [SubmissionPartial])
    submissions?: SubmissionPartial[];

    constructor(
        bio: string,
        userName: string,
        firstName: string,
        lastName: string,
        dateJoined: Date,
        tracksCreated?: TrackPartial[],
        submissions?: SubmissionPartial[],
        _id?: ObjectId
      ) {
        this._id = _id;
        this.bio = bio;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateJoined = dateJoined;
        this.tracksCreated = tracksCreated;
        this.submissions = submissions;
      }
}