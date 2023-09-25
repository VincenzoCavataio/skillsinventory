export type ResponseElementObjectData = { id: number, name: string }
export type CompiledFields = {
    fullName?: string;
    skill?: string;
    certification?: string;
    city?: string
    educationalLevel?: string,
    institute?: string,
    course?: string
<<<<<<< HEAD
};
=======
};

type SkillArr = {
    label: string,
    level?: number,
    levelType: string
}

export type ReduxFiltersObj = {
    fullName: string;
    skills: SkillArr[];
    certifications: string[];
    cities: string[],
    institute: "",
    course: "",
};
>>>>>>> f9404e131004952fffb6594d1f00637a23d8a663
