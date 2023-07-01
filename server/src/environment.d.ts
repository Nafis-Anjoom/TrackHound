
declare namespace NodeJS {
    interface ProcessEnv {
        DB_CONN_STRING: string;
        DB_NAME: string;
        USERS_COLLECTION_NAME: string;
        TRACKS_COLLECTION_NAME: string;
        SUBMISSIONS_COLLECTION_NAME: string;
        COMMENTS_COLLECTION_NAME: string;
        PORT: string;
        URL: string;
    }
}
export { }