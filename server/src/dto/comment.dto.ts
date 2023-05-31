import { AutoMap } from '@automapper/classes';

export default class CommentDTO {
    @AutoMap()
    id: string;
    @AutoMap()
    trackId: string;
    @AutoMap()
    body: string;
    @AutoMap()
    datePosted: Date;
    @AutoMap()
    author: {
        _id: string;
        userName: string;
    };

    constructor(
        id: string,
        trackId: string,
        body: string,
        datePosted: Date,
        authorId: string,
        authorUserName: string
      ) {
        this.id = id;
        this.trackId = trackId;
        this.body = body;
        this.datePosted = datePosted;
        this.author = {
          _id: authorId,
          userName: authorUserName,
        };
    }
}