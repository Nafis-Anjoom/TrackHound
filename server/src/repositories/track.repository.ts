import { inject, injectable } from "inversify";
import { Collection, ObjectId } from "mongodb";
import 'dotenv/config';
import MongoDB from "../mongodb";
import Track from "../models/track.model";


@injectable()
export default class TrackRepository {
    tracks: Collection<Track>;

    constructor(@inject("MongoDB") mongoDb: MongoDB) {
        this.tracks = mongoDb.getCollection<Track>(process.env.TRACKS_COLLECTION_NAME ?? 'tracks');
    }

    public async createTrack(track: Track) {
        const result = await this.tracks.insertOne(track);
        return result;
    }
    
    public async getTrackById(id: string) {
        const result = await this.tracks.findOne({ _id: new ObjectId(id) });
        return result;
    }

    // TODO: paginate
    public async getAllTracks() {
        const result = await this.tracks.find({}).toArray();
        return result as Track[];
    }

    public async updateTrack(id: ObjectId, updatedTrack: Track) {
        const result = await this.tracks.updateOne({_id: id}, { $set: updatedTrack }, { ignoreUndefined: true });
    }

    public async deleteTrack(id: string) {
        const result = await this.tracks.deleteOne({_id: new ObjectId(id)});
    }
}