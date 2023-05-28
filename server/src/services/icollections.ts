import { Collection } from "mongodb";
import User from "../models/user.model";
import Track from "../models/track.model";
import Submission from "../models/submission.model";
import Comment from "../models/comment.model";

export default interface ICollections {
    tracks?: Collection<Track>;
    users?: Collection<User>;
    submissions?: Collection<Submission>;
    comments?: Collection<Comment>;
}