import { BaseHttpController, controller, httpDelete, httpGet, httpPost, httpPut, requestBody, requestParam } from "inversify-express-utils";
import TrackService from "../services/track.service";
import Track from "../models/track.model";

@controller('/track')
export default class TrackController extends BaseHttpController{
    trackService: TrackService;

    constructor(trackService: TrackService) {
        super();
        this.trackService = trackService;
    }

    @httpPost('/')
    private async createTrack(@requestBody() track: Track) {
        try {
            await this.trackService.createTrack(track);
            return this.json(track, 201); 
        } catch(error) {
            return this.internalServerError();
        }
    }

    @httpGet('/')
    private async getAllTracks() {
        try {
            const result = await this.trackService.getAllTracks();
            return this.json(result, 200);
        } catch(error) {
            return this.internalServerError();
        }
    }

    @httpGet('/:id')
    private async getTrackById(@requestParam('id') trackId: string) {
        try {
            const result = await this.trackService.getTrackById(trackId);
            return this.json(result, 200);
        } catch(error) {
            return this.internalServerError();
        }
    }

    @httpDelete('/:id')
    private async deleteTrack(@requestParam('id') trackId: string) {
        try {
            await this.trackService.deleteTrack(trackId);
            return this.json({"id": trackId}, 200);
        } catch(error) {
            return this.internalServerError();
        }
    }

    @httpPut(':/id')
    private async updateTrack(@requestParam('id') trackId: string, @requestBody() updatedTrack: Track) {
        try {
            await this.trackService.updateTrack(trackId, updatedTrack);
            return this.json(updatedTrack, 200);
        } catch(error) {
            return this.internalServerError();
        }
    }
}