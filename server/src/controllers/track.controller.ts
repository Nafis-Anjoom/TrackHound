import { controller, httpDelete, httpGet, httpPost, httpPut, requestBody, requestParam } from "inversify-express-utils";
import { inject } from "inversify";
import TrackService from "../services/track.service";
import TrackDTO from "../dto/track.dto";

@controller('/track')
export default class TrackController {
    trackService: TrackService;

    constructor(@inject('TrackService') trackService: TrackService) {
        this.trackService = trackService;
    }

    @httpPost('/')
    private async createTrack(@requestBody() track: TrackDTO) {
        
    }

    @httpGet('/')
    private async getAllTracks() {
        
    }

    @httpGet('/:id')
    private async getTrackById(@requestParam('id') trackId: string) {
    
    }

    @httpDelete('/:id')
    private async deleteTrack(@requestParam('id') trackId: string) {
        
    }

    @httpPut(':/id')
    private async updateTrack(@requestParam('id') trackId: string, @requestBody() updatedTrack: TrackDTO) {
        
    }
}