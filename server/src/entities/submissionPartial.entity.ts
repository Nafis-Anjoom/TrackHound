import { ObjectId } from "mongodb";
import TrackPartial from "./trackPartial.entity";
import { AutoMap } from '@automapper/classes';

export default class SubmissionPartial {
    @AutoMap()
    _id: ObjectId;
    @AutoMap(() => TrackPartial)
    track: TrackPartial;
    @AutoMap()
    time: number;
    @AutoMap()
    rating: number;
    @AutoMap()
    datePosted: Date;

    constructor(_id: ObjectId, track: TrackPartial, time: number, rating: number, dateposted: Date) {
        this._id = _id;
        this.track = track;
        this.time = time;
        this.rating = rating;
        this.datePosted = dateposted;
    }
}