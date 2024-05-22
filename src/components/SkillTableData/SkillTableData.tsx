import * as React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../redux/types";
import useApi from "../../utilities/useApi";
import { allTabledata } from "../SkillsTable/SkillsTable.controller";

type TableData = {
  userId: string;
  lastName: string;
  firstName: string;
  skillsList: string[];
  skillsRanking: string;
  anniEsperienza?: string;
  educationList?: string;
  residenceInfo?: string;
  certificationList?: string;
};

type Order = "asc" | "desc";

type HeadCell = {
  disablePadding: boolean;
  id: keyof TableData;
  label: string;
  numeric: boolean;
};

type EnhancedTableProps = {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof TableData
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
};

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
): TableData {
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

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;

  const createSortHandler =
    // (property: keyof TableData, sortOrder: Order) =>
    (property: keyof TableData) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

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
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

export default function SkillTableData() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof TableData>("userId");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
  const tableData = useApi(allTabledata(FAKE_PAYLOAD))?.data;
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

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof TableData
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => {
    selected.indexOf(id) !== -1;
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );

  return (
    <Box sx={{ width: "100%", height: "auto" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <Box display="flex" justifyContent="flex-end" alignItems="center">
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <Button
            sx={{
              minWidth: 52,
              backgroundColor: "#8CBE2D",
              height: 40,
              color: "white",
            }}
          >
            v
          </Button>
        </Box>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                // const isItemSelected = isSelected(row.userId);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    // aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.userId}
                    // selected={isItemSelected}
                  >
                    <TableCell align="center">
                      <Button
                        sx={{
                          minWidth: 34,
                          backgroundColor: "#8CBE2D",
                          height: 20,
                          color: "white",
                        }}
                      >
                        {row.userId}
                      </Button>
                    </TableCell>
                    <TableCell
                      align="center"
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.lastName}
                    </TableCell>
                    <TableCell align="center">{row.firstName}</TableCell>
                    <TableCell align="center">{row.skillsList}</TableCell>
                    <TableCell align="center">{row.skillsRanking}</TableCell>
                    <TableCell align="center">{row.anniEsperienza}</TableCell>
                    <TableCell align="center">{row.educationList}</TableCell>
                    <TableCell align="center">{row.residenceInfo}</TableCell>
                    <TableCell align="center">
                      {row.certificationList}
                    </TableCell>
                    <TableCell padding="checkbox">
                      <Checkbox
                        // onClick={(event) => handleClick(event, row.userId)}
                        role="checkbox"
                        color="primary"
                        // checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
