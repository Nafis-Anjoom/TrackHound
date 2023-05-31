import TrackPartialDTO from "./trackPartial.dto";
import { AutoMap } from '@automapper/classes';

export default class SubmissionPartialDTO {
    @AutoMap()
    id: string;
    @AutoMap(() => TrackPartialDTO)
    track: TrackPartialDTO;
    @AutoMap()
    time: number;
    @AutoMap()
    rating: number;
    @AutoMap()
    datePosted: Date;

    constructor(
        id: string,
        track: TrackPartialDTO,
        time: number,
        rating: number,
        datePosted: Date
      ) {
        this.id = id;
        this.track = track;
        this.time = time;
        this.rating = rating;
        this.datePosted = datePosted;
      }
}