export default interface TrackDTO {
    id?: string;
    name: string;
    creator: {
        id: string;
        userName: string;
    };
    rating: number;
    startPos: number;
    endPos: number;
    city: string;
    province: string;
    dateCreated: Date;
}