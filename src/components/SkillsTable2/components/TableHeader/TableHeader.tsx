import { Box, IconButton, TableCell, TableHead, TableRow } from "@mui/material";
import { HeadCell } from "./types";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const headCells: readonly HeadCell[] = [
  {
    id: "userId",
    numeric: false,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "lastName",
    numeric: false,
    disablePadding: true,
    label: "Last Name",
  },
  {
    id: "firstName",
    numeric: false,
    disablePadding: false,
    label: "First Name",
  },
  {
    id: "skillsList",
    numeric: true,
    disablePadding: false,
    label: "Skills list",
  },
  {
    id: "skillsRanking",
    numeric: true,
    disablePadding: false,
    label: "Ranking",
  },
  {
    id: "anniEsperienza",
    numeric: true,
    disablePadding: false,
    label: "Experience Years",
  },
  {
    id: "educationList",
    numeric: false,
    disablePadding: false,
    label: "Education",
  },
  {
    id: "residenceInfo",
    numeric: false,
    disablePadding: false,
    label: "Address",
  },
  {
    id: "certificationList",
    numeric: false,
    disablePadding: false,
    label: "Certifications",
  },
];

export const TableHeader = () => {
  return (
    <TableHead>
      <TableRow bgColor="#8CBE2D">
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"center"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box color="white">{headCell.label}</Box>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <IconButton
                  //bgColor="white"
                  size="small"
                  onClick={createSortHandler(headCell.id, "asc")}
                  color={
                    orderBy === headCell.id && order === "asc"
                      ? "primary"
                      : "white"
                  }
                >
                  <ArrowDropUpIcon
                    sx={{
                      color:
                        orderBy === headCell.id && order === "asc"
                          ? "primary"
                          : "white",
                    }}
                  />
                </IconButton>
                <IconButton
                  size="small"
                  onClick={createSortHandler(headCell.id, "desc")}
                  color={
                    orderBy === headCell.id && order === "desc"
                      ? "primary"
                      : "white"
                  }
                >
                  <ArrowDropDownIcon
                    sx={{
                      color:
                        orderBy === headCell.id && order === "desc"
                          ? "primary"
                          : "white",
                    }}
                  />
                </IconButton>
              </Box>
            </Box>
          </TableCell>
        ))}
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
