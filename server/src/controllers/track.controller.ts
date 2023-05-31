import { BaseHttpController, controller, httpDelete, httpGet, httpPost, httpPut, requestBody, requestParam } from "inversify-express-utils";
import TrackService from "../services/track.service";
import TrackDTO from "../dto/track.dto";

@controller('/track')
export default class TrackController extends BaseHttpController{
    trackService: TrackService;

    constructor(trackService: TrackService) {
        super();
        this.trackService = trackService;
    }

    @httpPost('/')
    private async createTrack(@requestBody() track: TrackDTO) {
        try {
            const result = await this.trackService.createTrack(track);
            track.id = result.insertedId.toString();
            return this.created(`${process.env.URL || 'localhost:4321'}/track/${track.id}`, track); 
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
            const result = await this.trackService.deleteTrack(trackId);
            return this.ok(trackId);
        } catch(error) {
            return this.internalServerError();
        }
    }

    @httpPut(':/id')
    private async updateTrack(@requestParam('id') trackId: string, @requestBody() updatedTrack: TrackDTO) {
        try {
            const result = await this.trackService.updateTrack(trackId, updatedTrack);
            return this.json(updatedTrack, 200);
        } catch(error) {
            return this.internalServerError();
        }
    }
}