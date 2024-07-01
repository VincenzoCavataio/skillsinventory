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
import { useTranslation } from "react-i18next";
import { NEXTRE_ENG } from "../../../../common/commonColors";

type EduTableBodyBuildProps = {
  rows: EduRowType[];
  setRowsEduTable: Dispatch<SetStateAction<EduRowType[]>>;
};
export const EduAdder: React.FC<EduTableBodyBuildProps> = ({
  rows,
  setRowsEduTable,
}) => {
  const { t } = useTranslation();
  const eduHeadCells: readonly EduHeadCells[] = [
    {
      t: "",
      id: "level",
      menu: true,
      label: t("pages.userPage.tables.levelInTables"),
      checkbox: false,
    },
    {
      t: "",
      id: "course",
      menu: false,
      label: t("pages.userPage.tables.courseInTables"),
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
      id: "city",
      menu: false,
      label: t("pages.userPage.tables.cityInTables"),
      checkbox: false,
    },
    {
      t: "",
      id: "institute",
      menu: false,
      label: t("pages.userPage.tables.instituteInTables"),
      checkbox: true,
    },
  ];
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        marginTop: 2,
        maxWidth: "100%",
        overflowX: "auto",
        border: `solid 0.5px ${NEXTRE_ENG} `,
      }}
    >
      <Table
        sx={{ minWidth: 650, tableLayout: "fixed" }}
        aria-label="edu table"
      >
        <TableHead>
          <TableRow>
            {eduHeadCells.map((headCell) => (
              <TableCell
                sx={{
                  color: NEXTRE_ENG,
                  fontWeight: "550",
                  fontSize: 14,
                  width: headCell.checkbox ? "20px" : "187px",
                }}
                key={headCell.id}
              >
                {headCell.label}
              </TableCell>
            ))}
            <TableCell width="49px"></TableCell>
          </TableRow>
        </TableHead>

        <EduAdderBody rows={rows} setRowsEduTable={setRowsEduTable} />
      </Table>
    </TableContainer>
  );
};
