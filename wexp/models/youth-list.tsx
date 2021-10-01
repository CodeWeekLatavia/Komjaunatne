export interface UserDetails {
    fullName: string,
    imageURL: string,
    shortDescription: string,
    approxAge?: number, // no. of years
    experience?: number, // number of weeks
    location?: string
}