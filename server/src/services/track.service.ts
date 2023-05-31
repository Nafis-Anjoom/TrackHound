import { inject, injectable } from "inversify";
import TrackRepository from "../repositories/track.repository";
import TrackDTO from "../dto/track.dto";
import { mapper } from "../mappings/mapper";
import Track from "../entities/track.entity";
import { ObjectId } from "mongodb";

@injectable()
export default class TrackService {
    trackRepository: TrackRepository;

    constructor(@inject("TrackRepository") trackRepository: TrackRepository) {
        this.trackRepository = trackRepository;
    }

    public async createTrack(trackDTO: TrackDTO) {
        const track = mapper.map(trackDTO, TrackDTO, Track);
        const result = await this.trackRepository.createTrack(track);
        return result;
    }

    public async getTrackById(id: string) {
        const result = await this.trackRepository.getTrackById(new ObjectId(id));
        const track = mapper.map(result, Track, TrackDTO);
        return result;
    }

    public async getAllTracks() {
        const result = await this.trackRepository.getAllTracks();
        const mapped: TrackDTO[] = [];
        result.map((track) => {
            mapped.concat(mapper.map(track, Track, TrackDTO));
        })
        return result;
    }

    public async updateTrack(id: string, updatedTrack: TrackDTO) {
        const mappedTrack = mapper.map(updatedTrack, TrackDTO, Track);
        const result = await this.updateTrack(id, mappedTrack);
    } 

    public async deleteTrack(id: string) {
        await this.trackRepository.deleteTrack(new ObjectId(id));
    }
    
    
    
}