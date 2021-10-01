export interface YouthUserData {
    userType: 'youth' | 'company',
    fullName: string,
    age: number,
    hasCovidSertificate?: boolean,
    sex?: 'male' | 'female',
    cvLink?: string,
    verified?: boolean,
    jobSearchStatus?: 'have not applied'| 'interview'| 'found',
    completedRegistration: boolean
}