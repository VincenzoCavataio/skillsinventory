import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { SkillHeadCells } from "../../types";
import { SkillAdderBody } from "../SkillAdderBody";
import { useTranslation } from "react-i18next";
import { NEXTRE_ENG } from "../../../../common/commonColors";
import { useSelector } from "react-redux";
import { checkboxSkillsSelector } from "../../../../redux/checkboxSkillsSelection";

export const SkillAdder = () => {
  const { t } = useTranslation();
  const checkedSkillsFromStore = useSelector(checkboxSkillsSelector);

  const skillHeadCells: readonly SkillHeadCells[] = [
    {
      id: "name",
      label: t("pages.userPage.tables.nameInTables"),
      numeric: false,
    },
    {
      id: "levels",
      label: t("pages.userPage.tables.levelsInTables"),
      numeric: true,
    },
    {
      id: "experience",
      label: t("pages.userPage.tables.experienceInTables"),
      numeric: true,
    },
    {
      id: "note",
      label: "Note",
      numeric: false,
    },
  ];

  if (checkedSkillsFromStore.length === 0) {
    return;
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: 2,
        maxWidth: "100%",
        border: `solid 0.5px ${NEXTRE_ENG}`,
        maxHeight: 400,
        scroll: "auto",
      }}
      elevation={0}
    >
      <Table sx={{ minWidth: 650 }} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {skillHeadCells.map((headCell) => (
              <TableCell
                sx={{
                  color: NEXTRE_ENG,
                  fontWeight: "550",
                  fontSize: 14,
                  width: headCell.numeric ? "50px" : undefined,
                }}
                key={headCell.id}
              >
                {headCell.label}
              </TableCell>
            ))}
            <TableCell />
          </TableRow>
        </TableHead>

        <SkillAdderBody />
      </Table>
    </TableContainer>
  );
};
