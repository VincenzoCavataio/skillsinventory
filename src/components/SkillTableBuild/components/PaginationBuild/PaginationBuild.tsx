import {
  Box,
  Pagination,
  Paper,
  TableContainer,
  TextField,
  Typography,
} from "@mui/material";
import { PaginationBuildProps } from "../../types";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import {
  itemNumberFilter,
  itemPageFilters,
} from "../../../../redux/paginationSlice";
import { ReduxStore } from "../../../../redux/types";

const SmallTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    padding: "3px 3px",
    fontSize: "0.875rem",
  },
  "& .MuiOutlinedInput-input": {
    padding: "3px 3px",
    "& .MuiInputLabel-root": {
      fontSize: "0.875rem",
    },
  },
}));

export const PaginationBuild: React.FC<PaginationBuildProps> = ({
  rows,
  totalRowsNumber,
}) => {
  const [value, setValue] = useState(20);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { itemNumber, pageStart } = useSelector(
    (state: ReduxStore) => state.pagination
  );
  const handleChange = (event) => {
    dispatch(itemNumberFilter({ itemNumber: Number(event.target.value) }));
  };
  const handlePageChange = (event, value) => {
    dispatch(itemPageFilters({ pageStart: Number(value) }));
  };

  const count = Math.ceil(totalRowsNumber?.totalResult / itemNumber);

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
