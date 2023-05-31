import { AutoMap } from '@automapper/classes';

export default class SubmissionDTO {
    @AutoMap()
    id?: string;
    @AutoMap()
    trackId: string;
    @AutoMap()
    userId: string;
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
        id?: string
      ) {
        this.id = id;
        this.trackId = trackId;
        this.userId = userId;
        this.time = time;
        this.rating = rating;
        this.datePosted = datePosted;
      }
    
}