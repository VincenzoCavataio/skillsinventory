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

//TODO: sistemare gli errori
export const PaginationBuild: React.FC<PaginationBuildProps> = ({
  totalRowsNumber,
}) => {
  const dispatch = useDispatch();
  const { itemNumber, pageStart } = useSelector(
    (state: ReduxStore) => state.pagination
  );
  const handleChange = (event) => {
    dispatch(itemNumberFilter({ itemNumber: Number(event.target.value) }));
  };
  const handlePageChange = (_, value: number) => {
    dispatch(itemPageFilters({ pageStart: Number(value) }));
  };
  let count: number = 0;

  if (totalRowsNumber) {
    count = Math.ceil(totalRowsNumber?.totalResult / itemNumber);
  }

  const elementsPerPage: string = `N. elementi per pagina`;

  return (
    <TableContainer component={Paper}>
      <Box
        height="40px"
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
          variant="outlined"
        />
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
