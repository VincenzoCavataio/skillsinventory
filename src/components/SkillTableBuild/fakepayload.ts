
export default const FAKE_PAYLOAD = {
  "starting-from": "P_FETCH_FIRST:0",
  "number-of-items": "P_OFFSET:20",
  "skill-name": `SKILLS:${
    allSkillsFilter && allSkillsFilter.length > 0
      ? `|${allSkillsFilter.join("|")}`
      : ""
  }`,
  "certificate-name": `CERTIFICATES:${
    allCertificationsID && allCertificationsID.length > 0
      ? `|${allCertificationsID.join("|")}|`
      : ""
  }`,
  "user-filter": `USERS:${
    filterStore?.filters.fullName ? `|${filterStore?.filters.fullName}|` : ""
  }`,
  isAnd: "OR",
  "name-ascending": "",
  "edu-ascending": "",
  "city-ascending": "",
  "city-filter": `CITIES:${
    filterStore?.filters.city && filterStore.filters.city.length > 0
      ? `|${filterStore.filters.city.join("|")}|`
      : ""
  }`,
  "ranking-order": "DEFAULT",
  "course-filter": `COURSES:${filterStore?.filters.course?.id}`,
  "levels-filter": `EDU_LEVELS:${filterStore?.filters.educationalLevel?.id}`,
  "institute-filter": `INSTITUTES:${filterStore?.filters.institute?.id}`,
};
