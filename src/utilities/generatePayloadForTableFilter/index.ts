import { CompiledFieldsWithID } from "../../pages/DashboardPage/types";
//passare due parametri nuovi, paginationinfo e sortinginfo, facoltativi, nella parte di UI creare due action (una per sorting e una pagination)
//poi ogni volta che dovrò utilizzare uno useApi per una chiamata della tabella va passata questa funzione al posto di fake payload

export const generatePayloadForTableFilter = ({
  allSkillsFilter,
  allCertificationsID,
  filterStore,
  paginationFilterNumber,
  paginationFilterPage,
}: {
  allSkillsFilter: string[] | undefined;
  allCertificationsID: number[];
  filterStore:
    | {
        filters: Omit<CompiledFieldsWithID, "skill">;
      }
    | undefined;
  paginationFilterNumber: number | undefined;
  paginationFilterPage: number | undefined;
}) => {
  let fetchPagination: number;
  {
    if (paginationFilterPage > 1) {
      fetchPagination = paginationFilterNumber * (paginationFilterPage - 1);
    } else {
      fetchPagination = 0;
    }
  }
  const generatedPayload = {
    "starting-from": `P_FETCH_FIRST:${fetchPagination}`,
    "number-of-items": `P_OFFSET:${paginationFilterNumber}`,
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
    "course-filter": `COURSES:${filterStore?.filters.course?.id || ""}`,
    "levels-filter": `EDU_LEVELS:${
      filterStore?.filters.educationalLevel?.id || ""
    }`,
    "institute-filter": `INSTITUTES:${
      filterStore?.filters.institute?.id || ""
    }`,
  };

  return generatedPayload;
};
