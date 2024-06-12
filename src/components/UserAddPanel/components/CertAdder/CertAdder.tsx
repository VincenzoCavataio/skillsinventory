import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CertHeadCells, CertRowType } from "../../types";
import { Dispatch, SetStateAction } from "react";
import { CertAdderBody } from "../CertAdderBody";
type CertTableBodyBuildProps = {
  rows: CertRowType[];
  setRowsSkillTable: Dispatch<SetStateAction<CertRowType[]>>;
};
export const CertAdder: React.FC<CertTableBodyBuildProps> = ({
  rows,
  setRowsCertTable,
}) => {
  const certHeadCells: readonly CertHeadCells[] = [
    {
      t: "",
      id: "name",
      date: false,
      label: "Name",
      checkbox: false,
    },
    {
      t: "",
      id: "issuer",
      date: false,
      label: "Issuer",
      checkbox: false,
    },
    {
      t: "",
      id: "release date",
      date: true,
      label: "Release Date",
      checkbox: false,
    },
    {
      t: "",
      id: "expiration date",
      date: true,
      label: "Expiration date",
      checkbox: false,
    },
    {
      t: "",
      id: "code",
      date: false,
      label: "Code",
      checkbox: false,
    },
    {
      t: "",
      id: "it",
      date: false,
      label: "IT",
      checkbox: true,
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
            {certHeadCells.map((headCell) => (
              <TableCell
                // sx={{ color: "white", fontWeight: "550", fontSize: 14 }}
                sx={{
                  color: "#8cbe2d",
                  fontWeight: "550",
                  fontSize: 14,
                  width: headCell.checkbox ? "50px" : undefined,
                }}
                key={headCell.id}
              >
                {headCell.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <CertAdderBody rows={rows} setRowsSkillTable={setRowsSkillTable} />
      </Table>
    </TableContainer>
  );
};
