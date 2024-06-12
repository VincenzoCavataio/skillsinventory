import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { SkillHeadCells, SkillRowType } from "../../types";
import { SkillAdderBody } from "../SkillAdderBody";
import { Dispatch, SetStateAction } from "react";
type SkillTableBodyBuildProps = {
  rows: SkillRowType[];
  setRowsSkillTable: Dispatch<SetStateAction<SkillRowType[]>>;
};

// export const SkillAdder = (rows: SkillRowType[]) => {
export const SkillAdder: React.FC<SkillTableBodyBuildProps> = ({
  rows,
  setRowsSkillTable,
}) => {
  const skillHeadCells: readonly SkillHeadCells[] = [
    {
      t: "",
      id: "name",
      label: "Name",
      numeric: false,
    },
    {
      t: "",
      id: "levels",
      label: "Levels",
      numeric: true,
    },
    {
      t: "",
      id: "experience",
      label: "Experience",
      numeric: true,
    },
    {
      t: "",
      id: "note",
      label: "Note",
      numeric: false,
    },
  ];
  return (
    <TableContainer
      component={Paper}
      sx={{ marginTop: 2, width: "auto", border: "solid 0.5px #8cbe2d" }}
      elevation={0}
    >
      <Table sx={{ minWidth: 650 }} aria-label="skills table">
        <TableHead>
          <TableRow>
            {skillHeadCells.map((headCell) => (
              <TableCell
                // sx={{ color: "white", fontWeight: "550", fontSize: 14 }}
                sx={{
                  color: "#8cbe2d",
                  fontWeight: "550",
                  fontSize: 14,
                  width: headCell.numeric ? "50px" : undefined,
                }}
                key={headCell.id}
              >
                {headCell.label}
              </TableCell>
            ))}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>

        <SkillAdderBody rows={rows} setRowsSkillTable={setRowsSkillTable} />
      </Table>
    </TableContainer>
  );
};
