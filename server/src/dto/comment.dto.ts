export default interface CommentDTO {
    id: string;
    trackId: string;
    body: string;
    datePosted: Date;
    author: {
        _id: string;
        userName: string;
    };
}