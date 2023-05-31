import SubmissionPartialDTO from "./submissionPartial.dto";
import TrackPartialDTO from "./trackPartial.dto";
import { AutoMap } from '@automapper/classes';

export default class UserDTO {
    @AutoMap()
    id?: string;
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
    @AutoMap(() => [TrackPartialDTO])
    tracksCreated?: TrackPartialDTO[];
    @AutoMap(() => [SubmissionPartialDTO])
    submissions?: SubmissionPartialDTO[];

    constructor(
        bio: string,
        userName: string,
        firstName: string,
        lastName: string,
        dateJoined: Date,
        tracksCreated?: TrackPartialDTO[],
        submissions?: SubmissionPartialDTO[],
        id?: string
      ) {
        this.id = id;
        this.bio = bio;
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateJoined = dateJoined;
        this.tracksCreated = tracksCreated;
        this.submissions = submissions;
      }

}