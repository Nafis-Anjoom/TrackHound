import { AutoMap } from '@automapper/classes';

export default class TrackPartialDTO {
    @AutoMap()
    id: string;
    @AutoMap()
    name: string;
    @AutoMap()
    city: string;
    @AutoMap()
    province: string;
    @AutoMap()
    rating: string;

    constructor(id: string, name: string, city: string, province: string, rating: string) {
        this.id = id;
        this.name = name;
        this.city = city;
        this.province = province;
        this.rating = rating;
      }
}