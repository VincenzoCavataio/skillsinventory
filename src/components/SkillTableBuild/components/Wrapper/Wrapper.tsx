import { Box, Paper, Table, TableContainer, Typography } from "@mui/material";
import { TableHeaderBuild } from "../TableHeaderBuild";
import useApi from "../../../../utilities/useApi";
import { allTabledata } from "../../SkillsTable.controller";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import { TableBodyBuild } from "../TableBodyBuild";
import { PaginationBuild } from "../PaginationBuild";
import { generatePayloadForTableFilter } from "../../../../utilities/generatePayloadForTableFilter";
import { TableDataData, TableDataResponse } from "../../types";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

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

  return (
    <TableContainer component={Paper}>
      <PaginationBuild totalRowsNumber={TOTAL_ROW_COUNT} />
      <Table sx={{ minWidth: 650 }} aria-label="skills table">
        <TableHeaderBuild />
        <TableBodyBuild rows={rows} />
      </Table>
      {(!rows || rows?.length === 0) && (
        <Box display="flex" justifyContent="center" flexDirection="column">
          <Box
            component="span"
            display="flex"
            alignContent="center"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            p={6}
          >
            <Box
              display="flex"
              flexDirection="row"
              alignContent="center"
              alignItems="center"
            >
              <Typography variant="h5" mr={2}>
                Nessun risultato trovato
              </Typography>
              <ErrorOutlineIcon fontSize="large" sx={{ ml: -1 }} />
            </Box>
            <Typography variant="subtitle2" mt={1} mb={2}>
              Modifica i filtri per fare una nuova ricerca
            </Typography>
          </Box>
        </Box>
      )}
    </TableContainer>
  );
};
