import { inject, injectable } from "inversify";
import UserRepository from "../repositories/user.repository";
import User from "../models/user.model";
import { ObjectId } from "mongodb";
import Submission from "../models/submission.model";
import SubmissionRepository from "../repositories/submission.repository";
import SubmissionPartial from "../models/submissionPartial.model";
import TrackRepository from "../repositories/track.repository";

@injectable()
export default class UserService {
    userRepository: UserRepository;
    submissionRepository: SubmissionRepository;
    trackRepository: TrackRepository;

    constructor(@inject("UserRepository") userRepository: UserRepository,
        @inject("SubmissionRepository") submissionRepository: SubmissionRepository,
        @inject("TrackRepository") trackRepository: TrackRepository) {
        this.userRepository = userRepository;
        this.submissionRepository = submissionRepository;
        this.trackRepository = trackRepository;
    }

    public async createUser(user: User) {
        const result = await this.userRepository.createUser(user);
        return result;
    }

    public async updateUser(id: string, updatedUser: User) {
        await this.userRepository.updateUser(new ObjectId(id), updatedUser);
    }

    public async deleteUser(id: string) {
        await this.userRepository.deleteUser(new ObjectId(id));
    }

    public async getUser(id: string) {
        const user = await this.userRepository.getUserById(new ObjectId(id));
        return user;
    }

    // TODO: figure out a way to efficiently get and store partial track information.
    // Potential solution: separate DTO and entity
    // for now lets call database for track and incurr additional IO
    public async createSubmission(submission: Submission) {
        const result = await this.submissionRepository.createSubmission(submission);
        const submissionId = result.insertedId.toString();
        const track = await this.trackRepository.getTrackById(submission.trackId);
        if (!track) {
            throw new Error("Track not found");
        }
        const submissionPartial: SubmissionPartial = {
            id: submissionId,
            track: {
                id: submission.trackId,
                name: track.name,
                city: track.city,
                province: track.province
            },
            time: submission.time,
            rating: submission.rating,
            datePosted: submission.datePosted
        };
        
        await this.userRepository.addSubmission(submission.userId, submissionPartial);
    }
}