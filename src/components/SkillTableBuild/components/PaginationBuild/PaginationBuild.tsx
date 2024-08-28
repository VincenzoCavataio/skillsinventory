import {
  Box,
  Pagination,
  Paper,
  TableContainer,
  Typography,
} from "@mui/material";
import { PaginationBuildProps } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import {
  itemNumberFilter,
  itemPageFilters,
  paginationSelector,
} from "../../../../redux/paginationSlice";
import { SmallTextField } from "./style";
import { useTranslation } from "react-i18next";
import { commonColors } from "../../../../common/commonColors";

/** Component for building pagination controls in a table. */
export const PaginationBuild: React.FC<PaginationBuildProps> = ({
  totalRowsNumber,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  /** Extracts item number and page start from Redux store. */
  const { itemNumber, pageStart } = useSelector(paginationSelector);

  /** Handles the change in items per page input. */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(itemNumberFilter({ itemNumber: Number(event.target.value) }));
  };

  /** Handles the change in pagination page. */
  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(itemPageFilters({ pageStart: value }));
  };

  /** Calculates the total number of pages. */
  const count = totalRowsNumber ? Math.ceil(totalRowsNumber / itemNumber) : 0;

  return (
    <TableContainer component={Paper}>
      <Box
        height="40px"
        pb={2}
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        alignItems="center"
        bgcolor={commonColors.backgroundGray}
      >
        <Typography
          sx={{
            paddingTop: "5.5px",
            paddingBottom: "5.5px",
            paddingRight: "10px",
          }}
        >
          {t("pages.dashboard.headerTable.paginationOverTable")}
        </Typography>
        <SmallTextField
          sx={{ width: 54, height: 32, backgroundColor: "white" }}
          type="number"
          value={itemNumber}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          inputProps={{
            min: 0,
          }}
          variant="outlined"
        />
        <Typography ml={2} mr={1}>{` ${totalRowsNumber} ${
          totalRowsNumber > 1
            ? t("pages.dashboard.headerTable.totalResults")
            : t("pages.dashboard.headerTable.totalResult")
        } `}</Typography>
        <Pagination
          sx={{ height: 32 }}
          count={count}
          page={pageStart}
          defaultPage={1}
          siblingCount={0}
          color="primary"
          onChange={handlePageChange}
        />
      </Box>
    </TableContainer>
  );
};
