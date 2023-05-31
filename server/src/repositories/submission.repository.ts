import { injectable } from "inversify";
import MongoDB from "../mongodb";
import { Collection, ObjectId } from "mongodb";
import Submission from "../models/submission.model";
import "dotenv/config";



@injectable()
export default class SubmissionRepository {
    submissions: Collection<Submission>;

    constructor(mongoDb: MongoDB) {
        this.submissions = mongoDb.getCollection<Submission>(process.env.SUBMISSIONS_COLLECTION_NAME ?? 'submissions');
    }

    public async getSubmissionById(id: string) {
        const result = await this.submissions.findOne({ _id: new ObjectId(id) });
        return result;
    }

    public async getSubmissionsByTrackId(trackId: string) {
        const result = await this.submissions.find({ trackId: trackId }).toArray();
        return result as Submission[];
    }

    public async deleteSubmission(id: string) {
        await this.submissions.deleteOne({ _id: new ObjectId(id) });
    }

    public async updateSubmission(id: string, updatedSubmission: Submission) {
        await this.submissions.updateOne({ _id: new ObjectId(id) }, { $set: updatedSubmission });
    }

    public async createSubmission(submission: Submission) {
        const result = await this.submissions.insertOne(submission);
        return result;
    }
}