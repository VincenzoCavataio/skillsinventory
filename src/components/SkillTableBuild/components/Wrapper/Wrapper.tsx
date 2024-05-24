import { Paper, Table, TableContainer } from "@mui/material";
import { TableHeaderBuild } from "../TableHeaderBuild";
import useApi from "../../../../utilities/useApi";
import { allTabledata } from "../../../SkillsTable/SkillsTable.controller";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import { TableBodyBuild } from "../TableBodyBuild";
import { PaginationBuild } from "../PaginationBuild";
import { generatePayloadForTableFilter } from "../../../../utilities/generatePayloadForTableFilter";

export const Wrapper = () => {
  const filterStore = useSelector((state: ReduxStore) => state.search);
  const skillsFilterStore = useSelector((state: ReduxStore) => state.skills);
  const paginationFilterStore = useSelector(
    (state: ReduxStore) => state.pagination
  );
  const allCertificationsID =
    filterStore?.filters?.certification?.map(
      (certification) => certification.id
    ) ?? [];
  const allSkillsFilter = skillsFilterStore?.skills.map(
    (skill) => `${skill.id};${skill.operator}${skill.level}`
  );
  const paginationFilterNumber = paginationFilterStore?.itemNumber;
  const paginationFilterPage = paginationFilterStore?.pageStart;

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
  const tableData = useApi(
    allTabledata(
      generatePayloadForTableFilter({
        filterStore,
        allCertificationsID,
        allSkillsFilter,
        paginationFilterNumber,
        paginationFilterPage,
      })
    )
  )?.data;
  const totalCount = tableData && tableData[tableData?.length - 1];

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

  let numberOfProperties: number = 0;
  if (rows) {
    numberOfProperties = Object.keys(rows).length;
  } else {
    numberOfProperties = 0;
  }
  return (
    <>
      <TableContainer component={Paper}>
        <PaginationBuild
          rows={numberOfProperties}
          totalRowsNumber={totalCount}
        />
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHeaderBuild />
          <TableBodyBuild rows={rows} />
        </Table>
      </TableContainer>
    </>
  );
};
