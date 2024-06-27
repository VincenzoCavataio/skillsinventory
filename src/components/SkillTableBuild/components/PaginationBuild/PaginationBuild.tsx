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
} from "../../../../redux/paginationSlice";
import { ReduxStore } from "../../../../redux/types";
import { SmallTextField } from "./style";
import { useTranslation } from "react-i18next";

export const PaginationBuild: React.FC<PaginationBuildProps> = ({
  totalRowsNumber,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { itemNumber, pageStart } = useSelector(
    (state: ReduxStore) => state.pagination
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(itemNumberFilter({ itemNumber: Number(event.target.value) }));
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(itemPageFilters({ pageStart: Number(value) }));
  };

  let count: number = 0;

  if (totalRowsNumber) {
    count = Math.ceil(totalRowsNumber?.totalResult / itemNumber);
  }

  const elementsPerPage: string = t(
    "pages.dashboard.headerTable.paginationOverTable"
  );

  return (
    <TableContainer component={Paper}>
      <Box
        height="40px"
        pb={2}
        display="flex"
        flexDirection={"row"}
        justifyContent={"flex-end"}
        alignItems={"center"}
      >
        <Typography
          sx={{
            paddingTop: "5.5px",
            paddingBottom: "5.5px",
            paddingRight: "10px",
          }}
        >
          {elementsPerPage}
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
        <Typography ml={2} mr={1}>{` ${totalRowsNumber?.totalResult} ${
          totalRowsNumber?.totalResult && totalRowsNumber?.totalResult > 1
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
