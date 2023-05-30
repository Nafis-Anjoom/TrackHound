export default interface UserDTO {
    id?: string;
    bio: string;
    userName: string;
    firstName: string;
    lastName: string;
    dateJoined: Date;
    tracksCreatd?: {
        id: string;
        name: string;
        city: string;
        province: string;
        time: number;
        rating: string;
    }[];
    submissions?: {
        id: string;
        track: {
            id: string;
            name: string;
            city: string;
            province: string;
        }
        time: number;
        rating: number;
        datePosted: Date;
    }[];
}