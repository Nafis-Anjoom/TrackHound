import { AutoMap } from "@automapper/classes";

export default class UserPartialDTO {
    @AutoMap()
    id: string;
    @AutoMap()
    userName: string;

    constructor(id: string, userName: string) {
        this.id = id;
        this.userName = userName;
    }
}