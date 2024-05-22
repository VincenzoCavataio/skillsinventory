import { Paper, Table, TableBody, TableContainer } from "@mui/material";
import { TableHeaderBuild } from "../TableHeaderBuild";
import useApi from "../../../../utilities/useApi";
import { allTabledata } from "../../../SkillsTable/SkillsTable.controller";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import { TableBodyBuild } from "../TableBodyBuild/TableBodyBuild";

export const Wrapper = () => {
  const filterStore = useSelector((state: ReduxStore) => state.search);
  const skillsFilterStore = useSelector((state: ReduxStore) => state.skills);
  const allCertificationsID =
    filterStore?.filters?.certification?.map(
      (certification) => certification.id
    ) ?? [];
  const allSkillsFilter = skillsFilterStore?.skills.map(
    (skill) => `${skill.id};${skill.operator}${skill.level}`
  );
  const FAKE_PAYLOAD = {
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
  function createData(
    userId: string,
    lastName: string,
    firstName: string,
    skillsList: string[],
    skillsRanking: string,
    anniEsperienza: string,
    educationList: string,
    residenceInfo: string,
    certificationList: string
  ) {
    return {
      userId,
      lastName,
      firstName,
      skillsList,
      skillsRanking,
      anniEsperienza,
      educationList,
      residenceInfo,
      certificationList,
    };
  }
  const tableData = useApi(allTabledata(FAKE_PAYLOAD))?.data;
  console.log(tableData);
  if (
    tableData &&
    tableData.length &&
    tableData[tableData.length - 1].totalResult
  )
    tableData.pop();
  const rows = tableData?.map((data) =>
    createData(
      data.userId,
      data.lastName,
      data.firstName,
      data.skillsList,
      data.skillsRanking,
      data.anniEsperienza,
      data.educationList,
      data.residenceInfo,
      data.certificationList
    )
  );
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHeaderBuild />
        <TableBodyBuild rows={rows} />
      </Table>
    </TableContainer>
  );
};
