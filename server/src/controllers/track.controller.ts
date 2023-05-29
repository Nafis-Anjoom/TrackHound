import express, { Router } from "express";
import { Collection, DeleteResult, ObjectId } from "mongodb";
import MongoDBService from "../services/database.service";
import Track from "../models/track.model";
import { controller, httpDelete, httpGet, httpPost, httpPut, requestBody, requestParam } from "inversify-express-utils";
import { inject } from "inversify";

@controller('/track')
export default class TrackController {
    tracks: Collection<Track>;
    private router: Router;

    constructor(@inject('MongoDBService') mongoDbService: MongoDBService) {
        this.tracks = mongoDbService.collections.tracks;
        this.router = Router();
        this.router.use(express.json());
    }

    @httpPost('/')
    private async createTrack(@requestBody() track: Track) {
        const result = await this.tracks.insertOne(track);
        return result;
    }

    @httpGet('/')
    private async getAllTracks(): Promise<Track[]> {
        const result = await this.tracks.find<Track>({}).toArray();
        return result;
    }

    @httpGet('/:id')
    private async getTrackById(@requestParam('id') trackId: string): Promise<Track> {
        const query = { _id: new ObjectId(trackId) };
        const result = await this.tracks.findOne(query);
        return result;
    }

    @httpDelete('/:id')
    private async deleteTrack(@requestParam('id') trackId: string): Promise<DeleteResult> {
        const query = { _id: new ObjectId(trackId) };
        const result = await this.tracks.deleteOne(query);
        return result;
    }

    @httpPut(':/id')
    private async updateTrack(@requestParam('id') trackId: string, @requestBody() updatedTrack: Track) {
        const query = { _id: new ObjectId(trackId) };
        const result = await this.tracks.updateOne(query, { $set: updatedTrack });
        return result;

    }
}