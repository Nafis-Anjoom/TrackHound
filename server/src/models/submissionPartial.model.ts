import TrackPartial from "./trackPartial.model";

export default interface SubmissionPartial {
  id: string;
  track: TrackPartial;
  time: number;
  rating: number;
  datePosted: Date;
}