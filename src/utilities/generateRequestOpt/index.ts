import { GenerateRequestOpt } from "./types";

export const generateRequestOpt = ({
    offset = 0,
    value = 1000,
    skill_filter = "",
    certificate_filter = "",
    city_filter = "",
    level_filter = 0,
    course_filter = 0,
    institute_filter = 0,
    char_sequence = "",
    isAND = 1,
    selected_procedure = 0
}: GenerateRequestOpt, method = 'POST') => {
    const PAYLOAD = {
        offset,
        value,
        skill_filter,
        certificate_filter,
        city_filter,
        level_filter,
        course_filter,
        institute_filter,
        char_sequence,
        isAND,
        selected_procedure,
    }

    return {
        method,
        body: JSON.stringify(PAYLOAD),
    }
}