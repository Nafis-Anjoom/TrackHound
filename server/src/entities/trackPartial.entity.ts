import { ObjectId } from "mongodb";
import { AutoMap } from "@automapper/classes";


export default class TrackPartial {
    @AutoMap()
    _id: ObjectId;
    @AutoMap()
    name: string;
    @AutoMap()
    city: string;
    @AutoMap()
    province: string;
    @AutoMap()
    rating: string;

    constructor(_id: ObjectId, name: string,  city: string, province: string, rating: string) {
        this._id = _id;
        this.name = name;
        this.city = city;
        this.province = province;
        this.rating = rating;
    }
}