import { URL as BASEURL } from "../../constants";
import { generateRequestOpt } from "../../utilities/generateRequestOpt/";

const URL = `${BASEURL}/api/v1/cv-record/getAllEducational`;

export const allEducationalMetadata = (filters) => {
  return {
    URL,
    requestOption: generateRequestOpt({
      selected_procedure: 1,
      certificate_filter: filters.certifications,
      city_filter: filters.city,
      course_filter: filters.course,
      institute_filter: filters.institute,
    }),
  };
};
export const allCitiesMetadata = {
  URL,
  requestOption: generateRequestOpt({ selected_procedure: 5 }),
};
export const allSkillslMetadata = {
  URL,
  requestOption: generateRequestOpt({}),
};
export const allEducationalLevelslMetadata = {
  URL,
  requestOption: generateRequestOpt({ selected_procedure: 3 }),
};
export const allInstitutesMetadata = {
  URL,
  requestOption: generateRequestOpt({ selected_procedure: 4 }),
};
export const allCoursesMetadata = {
  URL,
  requestOption: generateRequestOpt({ selected_procedure: 2 }),
};
