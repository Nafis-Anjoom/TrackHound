import express, { Router } from "express";
import { Collection, DeleteResult, ObjectId } from "mongodb";
import { autoInjectable, singleton } from "tsyringe";
import MongoDBService from "../services/database.service";
import Track from "../models/track.model";

@autoInjectable()
@singleton()
export default class TrackController {
    tracks: Collection<Track>;
    private router: Router;

    constructor(mongoDbService: MongoDBService) {
        this.tracks = mongoDbService.collections.tracks;
        this.router = Router();
        this.router.use(express.json());
    }

    private async createTrack(track: Track) {
        const result = await this.tracks.insertOne(track);
        return result;
    }

    private async getAllTracks(): Promise<Track[]> {
        const result = await this.tracks.find<Track>({}).toArray();
        return result;
    }

    private async getTrackById(id: string): Promise<Track> {
        const query = { _id: new ObjectId(id) };
        const result = await this.tracks.findOne(query);
        return result;
    }

    private async deleteTrack(id: string): Promise<DeleteResult> {
        const query = { _id: new ObjectId(id) };
        const result = await this.tracks.deleteOne(query);
        return result;
    }

    private async updateTrack(id: string, updatedTrack: Track) {
        const query = { _id: new ObjectId(id) };
        const result = await this.tracks.updateOne(query, { $set: updatedTrack });
        return result;

    }

    public routes(): Router {
        this.router.get("/:id", async (req, res) => {
            const id = req?.params?.id;

            try {
                const result = await this.getTrackById(id);
                res.status(200).send(result);
            } catch(error) {
                res.status(400).send(`unable to get track ${id}`);
            }
        });

        this.router.get("/", async (req, res) => {
            try {
                const result = await this.getAllTracks();
                res.status(200).send(result);
            } catch(error) {
                res.status(400).send('unable to get all tracks');
            }
        });

        this.router.post("/", async (req, res) => {
            const track = req.body as Track;
            try {
                const result = await this.createTrack(track);
                res.status(200).send('successfully created a new track');
            } catch(error) {
                res.status(400).send('unable to create a new track');
            }
        });

        this.router.delete("/:id", async (req, res) => {
            const id = req?.params?.id;
            try {
                const result = await this.deleteTrack(id);
                res.status(200).send(result);
            } catch(error) {
                res.status(400).send(`unable to delete track ${id}`);
            }
        });

        this.router.put("/:id", async (req, res) => {
            const id = req?.params?.id;
            const track = req?.body as Track;
            try {
                const result = await this.updateTrack(id, track);
                res.status(200).send(`successfully updated track ${id}`);
            } catch(error) {
                res.status(400).send(`unable to update track ${id}`);
            }
        });

        return this.router;
    }
}