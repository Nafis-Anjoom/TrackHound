import { BaseHttpController, controller, httpDelete, httpGet, httpPost, httpPut, requestBody, requestParam } from "inversify-express-utils";
import TrackService from "../services/track.service";
import Track from "../models/track.model";
import Comment from "../models/comment.model";

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
    private async getAllTracksWithoutComments() {
        try {
            const result = await this.trackService.getAllTracksWithoutComments();
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

    @httpPut('/:id')
    private async updateTrack(@requestParam('id') trackId: string, @requestBody() updatedTrack: Track) {
        try {
            await this.trackService.updateTrack(trackId, updatedTrack);
            return this.json(updatedTrack, 200);
        } catch(error) {
            return this.internalServerError();
        }
    }

    @httpPost('/comment')
    private async postComment(@requestBody() comment: Comment) {
        try {
            await this.trackService.postComment(comment);
            return this.json(comment, 201);
        } catch(error) {
            return this.internalServerError();
        }
    }

    @httpGet('/:id/comment')
    private async getCommentsByTrackId(@requestParam('id') trackId: string) {
        try {
            const result = await this.trackService.getCommentsByTrackId(trackId);
            return this.json({ "comments": result }, 200);
        } catch(error) {
            return this.internalServerError();
        }
    }

    @httpPut('/:trackId/comment/:commentId')
    private async editComment(@requestParam('trackId') trackId: string, 
        @requestParam('commentId') commentId: string,
        @requestBody() updatedComment: Comment) {
        try {
            const result = await this.trackService.editComment(commentId, updatedComment);
            return this.json(result, 200);
        } catch(error) {
            return this.internalServerError();
        }
    }

    @httpDelete('/:trackId/comment/:commentId')
    private async deleteComment(@requestParam('trackId') trackId: string, @requestParam('commentId') commentId: string) {
        try {
            const result = await this.trackService.deleteComment(commentId);
            return this.json({ "trackId" : trackId, "commentId": commentId }, 200);
        } catch(error) {
            return this.internalServerError();
        }
    }

    @httpGet('/:id/submission')
    private async getSubmissionsByTrackId(@requestParam('id') trackId: string) {
        try {
            const result = await this.trackService.getSubmissionsByTrackId(trackId);
            return this.json({ "submissions": result }, 200);
        } catch(error) {
            return this.internalServerError();
        }
    }
}