import { injectable } from "inversify";
import { Collection, ObjectId } from "mongodb";
import * as dotenv from "dotenv";
import MongoDB from "../mongodb";
import Track from "../entities/track.entity";


@injectable()
export default class TrackRepository {
    tracks: Collection<Track>;

    constructor(mongoDb: MongoDB) {
        dotenv.config();
        this.tracks = mongoDb.getCollection<Track>(process.env.TRACKS_COLLECTION_NAME);
    }

    public async createTrack(track: Track) {
        const result = await this.tracks.insertOne(track);
    }
    
    public async getTrackById(id: ObjectId): Promise<Track> {
        const result = await this.tracks.findOne({ _id: id });
        return result;
    }

    public async updateTrack(id: ObjectId, updatedTrack: Track) {
        const result = await this.tracks.updateOne(id, { $set: updatedTrack });
    }

    public async deleteTrack(id: ObjectId) {
        const result = await this.tracks.deleteOne(id);
    }
}