import { AutoMap } from '@automapper/classes';
import UserPartialDTO from './userPartial.dto';

export default class TrackDTO {
    @AutoMap()
    id?: string;
    @AutoMap()
    name: string;
    @AutoMap(() => UserPartialDTO)
    creator: UserPartialDTO;
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
        name: string,
        creator: UserPartialDTO,
        rating: number,
        startPos: number,
        endPos: number,
        city: string,
        province: string,
        dateCreated: Date,
        id?: string
      ) {
        this.id = id;
        this.name = name;
        this.creator = creator,
        this.rating = rating;
        this.startPos = startPos;
        this.endPos = endPos;
        this.city = city;
        this.province = province;
        this.dateCreated = dateCreated;
      }
}