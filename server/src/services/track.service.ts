import { inject, injectable } from "inversify";
import TrackRepository from "../repositories/track.repository";
import CommentRepository from "../repositories/comment.repository"; 
import Track from "../models/track.model";
import Comment from "../models/comment.model";
import SubmissionRepository from "../repositories/submission.repository";

@injectable()
export default class TrackService {
    trackRepository: TrackRepository;
    commentRepository: CommentRepository;
    submissionRepository: SubmissionRepository;

    constructor(@inject("TrackRepository") trackRepository: TrackRepository, 
        @inject("CommentRepository") commentRepository: CommentRepository,
        @inject("SubmissionRepository") submissionRepository: SubmissionRepository) {
        this.trackRepository = trackRepository;
        this.commentRepository = commentRepository;
        this.submissionRepository = submissionRepository;
    }

    public async createTrack(track: Track) {
        const result = await this.trackRepository.createTrack(track);
        return result;
    }

    public async getTrackById(id: string) {
        const track = await this.trackRepository.getTrackById(id);
        return track;
    }

    public async getAllTracksWithoutComments() {
        const result = await this.trackRepository.getAllTracks();
        return result;
    }

    public async updateTrack(id: string, updatedTrack: Track) {
        const result = await this.updateTrack(id, updatedTrack);
    } 

    public async deleteTrack(id: string) {
        await this.trackRepository.deleteTrack(id);
    }

    public async postComment(comment: Comment) {
        await this.commentRepository.createComment(comment);
    }

    public async getCommentsByTrackId(id: string) {
        const result = await this.commentRepository.getCommentByTrackId(id);
        return result;
    }

    public async editComment(id: string, updatedComment: Comment) {
        await this.commentRepository.updateComment(id, updatedComment);
    }

    public async deleteComment(id: string) {
        await this.commentRepository.deleteComment(id);
    }
    
    public async getSubmissionsByTrackId(trackId: string) {
        const result = this.submissionRepository.getSubmissionsByTrackId(trackId);
        return result;
    }
}