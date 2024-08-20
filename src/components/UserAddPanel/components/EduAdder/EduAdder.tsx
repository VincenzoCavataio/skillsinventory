import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { EduHeadCells } from "../../types";

import { EduAdderBody } from "../EduAdderBody";
import { useTranslation } from "react-i18next";
import { PRIMARY_COLOR } from "../../../../common/commonColors";
import { useSelector } from "react-redux";
import { checkboxEdusSelector } from "../../../../redux/checkboxEdusSelection";

export const EduAdder = () => {
  const { t } = useTranslation();
  const checkedEdusFromStore = useSelector(checkboxEdusSelector);
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
      id: "institute",
      menu: false,
      label: t("pages.userPage.tables.instituteInTables"),
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
      id: "it",
      menu: false,
      label: "IT",
      checkbox: true,
    },
  ];
  if (checkedEdusFromStore.length === 0) {
    return;
  }
  return (
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        marginTop: 2,
        maxWidth: "100%",
        overflowX: "auto",
        border: `solid 0.5px ${PRIMARY_COLOR} `,
        maxHeight: 400,
        scroll: "auto",
      }}
    >
      <Table
        sx={{ minWidth: 650, tableLayout: "fixed" }}
        stickyHeader
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow>
            {eduHeadCells.map((headCell) => (
              <TableCell
                sx={{
                  color: PRIMARY_COLOR,
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

        <EduAdderBody />
      </Table>
    </TableContainer>
  );
};
