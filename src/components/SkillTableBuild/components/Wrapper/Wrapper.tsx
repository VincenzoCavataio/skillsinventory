import { Paper, Table, TableContainer } from "@mui/material";
import { TableHeaderBuild } from "../TableHeaderBuild";
import useApi from "../../../../utilities/useApi";
import { allTabledata } from "../../SkillsTable.controller";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import { TableBodyBuild } from "../TableBodyBuild";
import { PaginationBuild } from "../PaginationBuild";
import { generatePayloadForTableFilter } from "../../../../utilities/generatePayloadForTableFilter";
import { TableDataData, TableDataResponse } from "../../types";

export const Wrapper = () => {
  const filterStore = useSelector((state: ReduxStore) => state.search);
  const skillsFilterStore = useSelector((state: ReduxStore) => state.skills);
  const paginationFilterStore = useSelector(
    (state: ReduxStore) => state.pagination
  );
  const sortingFilterStore = useSelector((state: ReduxStore) => state.sorting);
  const andOrFilter = useSelector((state: ReduxStore) => state.andOrStore);

  const allCertificationsID =
    filterStore?.filters?.certification?.map(
      (certification) => certification.id
    ) ?? [];
  const allSkillsFilter = skillsFilterStore?.skills.map(
    (skill) => `${skill.id};${skill.operator}${skill.level}`
  );
  const paginationFilterNumber = paginationFilterStore?.itemNumber;
  const paginationFilterPage = paginationFilterStore?.pageStart;
  const sortingManagementFilter = sortingFilterStore.sort.map(
    (sort) => `${sort.order}`
  );

  const andOrSelectorFilter = andOrFilter.andOr;

  function createData(
    userId: string,
    lastName: string,
    firstName: string,
    skillsList: string[] | undefined,
    skillsRanking: string | undefined,
    anniEsperienza: string | undefined,
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

  const tableDataResponse: TableDataResponse =
    useApi(
      allTabledata(
        generatePayloadForTableFilter({
          filterStore,
          allCertificationsID,
          allSkillsFilter,
          paginationFilterNumber,
          paginationFilterPage,
          sortingManagementFilter,
          andOrSelectorFilter,
        })
      )
    ).data ?? {};

  const rows = tableDataResponse
    ? tableDataResponse?.data?.map((data: TableDataData) =>
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
      )
    : [];

  const TOTAL_ROW_COUNT = tableDataResponse?.pagination?.count ?? 0;
  if (!rows) return;

  return (
    <TableContainer component={Paper}>
      <PaginationBuild totalRowsNumber={TOTAL_ROW_COUNT} />
      <Table sx={{ minWidth: 650 }} aria-label="skills table">
        <TableHeaderBuild />
        <TableBodyBuild rows={rows} />
      </Table>
    </TableContainer>
  );
};
