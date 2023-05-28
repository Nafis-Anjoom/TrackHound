import { Collection } from "mongodb";

export default interface ICollections {
    tracks?: Collection;
    users?: Collection;
    submissions?: Collection;
    comments?: Collection;
}