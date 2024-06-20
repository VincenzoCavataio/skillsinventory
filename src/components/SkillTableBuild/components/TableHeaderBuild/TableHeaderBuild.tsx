import { Button, TableCell, TableHead, TableRow } from "@mui/material";
import { commonColors } from "../../../../common/commonColors";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import { HeaderCustomCell } from "../HeaderCustomCell";
import { HeadCells } from "../../types";
import { useTranslation } from "react-i18next";
export const TableHeaderBuild = () => {
  const { t } = useTranslation();
  const skillsFilterStore = useSelector((state: ReduxStore) => state.skills);
  const allSkillsFilter = skillsFilterStore?.skills.map(
    (skill) => `${skill.id};${skill.operator}${skill.level}`
  );

  const headCells: readonly HeadCells[] = [
    {
      t: "N°",
      id: "userN",
      numeric: false,
      disablePadding: true,
      label: "N°",
      sorted: false,
      color: false,
    },
    {
      t: "ID",
      id: "userId",
      numeric: false,
      disablePadding: true,
      label: "ID",
      sorted: false,
      color: false,
    },
    {
      t: t("pages.dashboard.headerTable.surnameTable"),
      id: "lastName",
      numeric: false,
      disablePadding: true,
      label: "Last Name",
      sorted: true,
      color: false,
    },
    {
      t: t("pages.dashboard.headerTable.firstNameTable"),
      id: "firstName",
      numeric: false,
      disablePadding: false,
      label: "First Name",
      sorted: false,
      color: false,
    },
    {
      t: t("pages.dashboard.headerTable.skillsListTable"),
      id: "skillsList",
      numeric: true,
      disablePadding: false,
      label: "Skills list",
      sorted: false,
      color: false,
    },
    {
      t: t("pages.dashboard.headerTable.rankingTable"),
      id: "skillsRanking",
      numeric: true,
      disablePadding: false,
      label: "Ranking",
      sorted: true,
      sortingBE: "RANKING_",
      color: false,
    },
    {
      t: t("pages.dashboard.headerTable.experienceTable"),
      id: "anniEsperienza",
      numeric: true,
      disablePadding: false,
      label: "Experience Years",
      sorted: true,
      sortingBE: "EXP_",
      color: false,
    },
    {
      t: t("pages.dashboard.headerTable.educationTable"),
      id: "educationList",
      numeric: false,
      disablePadding: false,
      label: "Education",
      sorted: true,
      sortingBE: "EDU_",
      color: false,
    },
    {
      t: t("pages.dashboard.headerTable.addressTable"),
      id: "residenceInfo",
      numeric: false,
      disablePadding: false,
      label: "Address",
      sorted: true,
      sortingBE: "CITY_",
      color: false,
    },
    {
      t: t("pages.dashboard.headerTable.certificationTable"),
      id: "certificationList",
      numeric: false,
      disablePadding: false,
      label: "Certifications",
      sorted: false,
      color: false,
    },
  ];
  let visible: number;
  if (allSkillsFilter) {
    visible = allSkillsFilter.length;
  } else {
    visible = 0;
  }
  return (
    <TableHead sx={{ background: commonColors.accentColor }}>
      <TableRow>
        {headCells.map((headCell) => (
          <HeaderCustomCell
            key={headCell.id}
            headCell={headCell}
            visible={visible}
          />
        ))}
        <TableCell sx={{ padding: "10px", width: "10px" }} align="center">
          <Button
            sx={{
              backgroundColor: "white",
              color: " #8cbe2d",
              width: "90px",
              boxShadow: "none",
            }}
            variant="contained"
          >
            Download
          </Button>
          {/* <TableCell padding="checkbox"> */}
          {/* <Checkbox
            color="secondary"
            // indeterminate={numSelected > 0 && numSelected < rowCount}
            // checked={rowCount > 0 && numSelected === rowCount}
            // onChange={onSelectAllClick}
            // inputProps={{
            //   "aria-label": "select all CVs",
            // }}
          /> */}
        </TableCell>
      </TableRow>
    </TableHead>
  );
};
