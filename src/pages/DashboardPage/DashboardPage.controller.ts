import { BASE_URL } from "../../constants";
import { generateRequestOpt } from "../../utilities/generateRequestOpt/";

const URL = `${BASE_URL}/api/v1/cv-record/getAllEducational`;

export const allEducationalMetadata = { URL, requestOption: generateRequestOpt({ selected_procedure: 1 }) }
export const allSkillslMetadata = { URL, requestOption: generateRequestOpt({}) }
