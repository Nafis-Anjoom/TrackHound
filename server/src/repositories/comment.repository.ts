import { inject, injectable } from "inversify";
import { Collection, ObjectId } from "mongodb";
import 'dotenv/config';
import MongoDB from "../mongodb";
import Comment from "../models/comment.model";


@injectable()
export default class CommentRepository {
    comments: Collection<Comment>;

    constructor(@inject("MongoDB") mongoDb: MongoDB) {
        this.comments = mongoDb.getCollection<Comment>(process.env.COMMENTS_COLLECTION_NAME ?? 'comments');
    }

    public async createComment(comment: Comment) {
        const result = await this.comments.insertOne(comment);
        return result;
    }
    
    public async getCommentById(id: string) {
        const result = await this.comments.findOne({ _id: new ObjectId(id) });
        return result;
    }

    public async getCommentByTrackId(id: string) {
        const result = await this.comments.find({ trackId: id }).toArray();
        return result;
    }

    public async deleteComment(id: string) {
        const result = await this.comments.deleteOne({_id: new ObjectId(id)});
    }

    public async updateComment(id: string, updatedComment: Comment) {
        await this.comments.updateOne({ _id: new ObjectId(id) }, { $set: updatedComment }, { ignoreUndefined: true });
    }
}