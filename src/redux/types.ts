export type Skill = {
    label: string, levelType: string, level: number
}

export type Filters = {
    skills: Skill[],
    fullName: string,
    cities: string[],
    certifications: string[],
    institute: string,
    course: string
}


export type ReduxStore = {
    filters?: Filters
}