import { inject, injectable } from "inversify";
import TrackRepository from "../repositories/track.repository";
import Track from "../models/track.model";

@injectable()
export default class TrackService {
    trackRepository: TrackRepository;

    constructor(@inject("TrackRepository") trackRepository: TrackRepository) {
        this.trackRepository = trackRepository;
    }

    public async createTrack(track: Track) {
        const result = await this.trackRepository.createTrack(track);
        return result;
    }

    public async getTrackById(id: string) {
        const result = await this.trackRepository.getTrackById(id);
        return result;
    }

    public async getAllTracks() {
        const result = await this.trackRepository.getAllTracks();
        return result;
    }

    public async updateTrack(id: string, updatedTrack: Track) {
        const result = await this.updateTrack(id, updatedTrack);
    } 

    public async deleteTrack(id: string) {
        await this.trackRepository.deleteTrack(id);
    }
    
    
    
}