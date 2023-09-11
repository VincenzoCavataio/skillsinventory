const URL: string =
    "http://skillsinventory.api.nextre.org/api/v1/cv-record/getAllEducational";

const PAYLOAD: Record<string, string | number | boolean> = {
    offset: 0,
    value: 1000,
    skill_filter: "",
    certificate_filter: "",
    city_filter: "",
    level_filter: 0,
    course_filter: 0,
    institute_filter: 0,
    char_sequence: "",
    isAND: 1,
    selected_procedure: 0,
};

const requestOption = {
    method: "POST",
    body: JSON.stringify(PAYLOAD),
};

export const getTecnologiesData = async () => {
    const response = await fetch(URL, requestOption);
    const data = await response.json();
    return data

}