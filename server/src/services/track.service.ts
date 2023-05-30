import { inject, injectable } from "inversify";
import TrackRepository from "../repositories/track.repository";
import TrackDTO from "../dto/track.dto";

@injectable()
export default class TrackService {

    trackRepository: TrackRepository;

    constructor(@inject("TrackRepository") trackRepository: TrackRepository) {
        this.trackRepository = trackRepository;
    }

    public createTrack(trackDTO: TrackDTO) {

    }

    public getTrackById(id: string) {

    }

    public getAllTracks() {

    }

    public updateTrack(id: string, updatedTrack: TrackDTO) {

    } 

    public deleteTrack(id: string) {
        
    }
    
    
    
}