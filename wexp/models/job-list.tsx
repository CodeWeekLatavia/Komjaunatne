export interface JobDetails {
    jobTitle: string,
    imageURL: string,
    shortDescription: string,
    requiredExperience?: number, // no. of weeks
    minimumAge?: number, // no. of years
    location?: string // address
}

