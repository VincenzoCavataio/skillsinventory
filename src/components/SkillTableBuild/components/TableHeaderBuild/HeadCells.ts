import { HeadCells } from "../../types";
import { useTranslation } from "react-i18next";

export const HeadCellsData = () => {
  const { t } = useTranslation();
  const data: HeadCells[] = [
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

  return data;
};
