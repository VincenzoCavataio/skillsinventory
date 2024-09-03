import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableContainer,
  Typography,
} from "@mui/material";
import { TableHeaderBuild } from "../TableHeaderBuild";
import useApi from "../../../../utilities/useApi";
import { allTabledata } from "../../SkillsTable.controller";
import { useSelector } from "react-redux";
import { TableBodyBuild } from "../TableBodyBuild";
import { PaginationBuild } from "../PaginationBuild";
import { generatePayloadForTableFilter } from "../../../../utilities/generatePayloadForTableFilter";
import { TableDataResponse } from "../../types";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useTranslation } from "react-i18next";
import { searchSelector } from "../../../../redux/searchSlice";
import { skillsSelector } from "../../../../redux/skillsSlice";
import { paginationSelector } from "../../../../redux/paginationSlice";
import { andOrSelector } from "../../../../redux/andOrSlice";
import { sortingSelector } from "../../../../redux/sortingSlice";

/** Wrapper for Main table on Dashboard Page */
export const Wrapper = () => {
  /** Hook for translations */
  const { t } = useTranslation();

  /** Selectors */
  const filterStore = useSelector(searchSelector);
  const skillsFilterStore = useSelector(skillsSelector);
  const paginationFilterStore = useSelector(paginationSelector);
  const sortingFilterStore = useSelector(sortingSelector);
  const andOrFilter = useSelector(andOrSelector).andOr;

  /** All certifications IDs for payload builder */
  const allCertificationsID =
    filterStore?.filters?.certification?.map(
      (certification) => certification.id
    ) ?? [];

  /** All skills IDs, operator and level for payload builder */
  const allSkillsFilter = skillsFilterStore?.skills.map(
    (skill) => `${skill.id};${skill.operator}${skill.level}`
  );

  /** Pagination items metadata for payload builder */
  const paginationFilterNumber = paginationFilterStore?.itemNumber;

  /** Pagination pagestart metadata for payload builder */
  const paginationFilterPage = paginationFilterStore?.pageStart;

  /** Pagination page sorting metadata for payload builder */
  const sortingManagementFilter = sortingFilterStore.sort.map(
    (sort) => `${sort.order}`
  );

  /** Response from useApi to fill filtered Table */
  const tableDataResponse: {
    data: TableDataResponse | null;
    loading: boolean;
    error: unknown;
  } = useApi(
    allTabledata(
      generatePayloadForTableFilter({
        filterStore,
        allCertificationsID,
        allSkillsFilter,
        paginationFilterNumber,
        paginationFilterPage,
        sortingManagementFilter,
        andOrSelectorFilter: andOrFilter,
      })
    )
  );

  /** All rows to be displayed */
  const ROWS = tableDataResponse?.data ? tableDataResponse?.data?.data : [];

  /** Loading parameter from useApi  */
  const isLoading = !!tableDataResponse?.loading;

  /** Check if there are no results */
  const noResults = !ROWS || ROWS?.length === 0;

  /** Total number of rows for pagination */
  const TOTAL_ROW_COUNT = tableDataResponse?.data?.pagination?.count ?? 0;

  return (
    <TableContainer component={Paper}>
      <PaginationBuild totalRowsNumber={TOTAL_ROW_COUNT} />
      <Table sx={{ minWidth: 650 }} aria-label="skills table">
        <TableHeaderBuild />
        <TableBodyBuild rows={ROWS} />
      </Table>
      {noResults && (
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
            {!isLoading && (
              <>
                <Box
                  display="flex"
                  flexDirection="row"
                  alignContent="center"
                  alignItems="center"
                >
                  <Typography variant="h5" mr={2}>
                    {t("pages.dashboard.headerTable.noResults")}
                  </Typography>
                  <ErrorOutlineIcon fontSize="large" sx={{ ml: -1 }} />
                </Box>
                <Typography variant="subtitle2" mt={1} mb={2}>
                  {t("pages.dashboard.headerTable.noResultsDescription")}
                </Typography>
              </>
            )}
            {isLoading && <CircularProgress />}
          </Box>
        </Box>
      )}
    </TableContainer>
  );
};
