import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { EduHeadCells, EduRowType } from "../../types";
import { Dispatch, SetStateAction } from "react";
import { EduAdderBody } from "../EduAdderBody";
type EduTableBodyBuildProps = {
  rows: EduRowType[];
  setRowsEduTable: Dispatch<SetStateAction<EduRowType[]>>;
};
export const EduAdder: React.FC<EduTableBodyBuildProps> = ({
  rows,
  setRowsEduTable,
}) => {
  const eduHeadCells: readonly EduHeadCells[] = [
    {
      t: "",
      id: "level",
      menu: true,
      label: "Level",
      checkbox: false,
    },
    {
      t: "",
      id: "course",
      menu: false,
      label: "Course",
      checkbox: false,
    },
    {
      t: "",
      id: "it",
      menu: false,
      label: "IT",
      checkbox: false,
    },
    {
      t: "",
      id: "institute",
      menu: false,
      label: "Institute",
      checkbox: true,
    },
    {
      t: "",
      id: "city",
      menu: false,
      label: "City",
      checkbox: false,
    },
  ];
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      // sx={{ marginTop: 2, backgroundColor: "#8cbe2d", width: "auto" }}
      sx={{ marginTop: 2, width: "auto", border: "solid 0.5px #8cbe2d" }}
      // variant="outlined"
    >
      <Table sx={{ minWidth: 650 }} aria-label="edu table">
        <TableHead>
          <TableRow>
            {eduHeadCells.map((headCell) => (
              <TableCell
                // sx={{ color: "white", fontWeight: "550", fontSize: 14 }}
                sx={{
                  color: "#8cbe2d",
                  fontWeight: "550",
                  fontSize: 14,
                  width:
                    headCell.checkbox || headCell.menu ? "50px" : undefined,
                }}
                key={headCell.id}
              >
                {headCell.label}
              </TableCell>
            ))}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>

        <EduAdderBody rows={rows} setRowsEduTable={setRowsEduTable} />
      </Table>
    </TableContainer>
  );
};
