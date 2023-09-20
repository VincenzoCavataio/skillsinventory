import { BASE_URL } from "../../constants";
import { generateRequestOpt } from "../../utilities/generateRequestOpt/";

const URL = `${BASE_URL}/api/v1/cv-record/getAllEducational`;

export const allEducationalMetadata = { URL, requestOption: generateRequestOpt({ selected_procedure: 1 }) }
export const allCitiesMetadata = { URL, requestOption: generateRequestOpt({ selected_procedure: 5 }) }
export const allSkillslMetadata = { URL, requestOption: generateRequestOpt({}) }
export const allEducationalLevelslMetadata = { URL, requestOption: generateRequestOpt({ selected_procedure: 3 }) }
export const allInstitutesMetadata = { URL, requestOption: generateRequestOpt({ selected_procedure: 4 }) }
export const allCoursesMetadata = { URL, requestOption: generateRequestOpt({ selected_procedure: 2 }) }
