import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { commonColors } from "../../common/commonColors";
import useApi from "../../utilities/useApi";
import { allTabledata } from "../SkillsTable/SkillsTable.controller";
import { useSelector } from "react-redux";

import { ReduxStore } from "../../redux/types";
import { Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { PAGES } from "../../constants";

// TODO: componente bozza, da fare per bene

export const SkillsTable2 = () => {
  const navigate = useNavigate();
  const { userPage } = PAGES;

  const tableHeaderStyle = {
    fontSize: 16,
    textAlign: "center",
    color: commonColors.white,
  };

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
  ) {
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

  const filterStore = useSelector((state: ReduxStore) => state.search);
  const skillsFilterStore = useSelector((state: ReduxStore) => state.skills);
  const allCertificationsID =
    filterStore?.filters?.certification?.map(
      (certification) => certification.id
    ) ?? [];
  const allSkillsFilter = skillsFilterStore?.skills.map(
    (skill) => `${skill.id};${skill.operator}${skill.level}`
  );
  console.log(allSkillsFilter);

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

  //! TOFIX: Fixa cagata Backend
  const tableData = useApi(allTabledata(FAKE_PAYLOAD))?.data;
  console.log(tableData);
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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ background: commonColors.accentColor }}>
          <TableRow>
            <TableCell
              sx={[tableHeaderStyle, { width: 10, color: commonColors.white }]}
            >
              N.
            </TableCell>
            <TableCell
              sx={[tableHeaderStyle, { width: 40, color: commonColors.white }]}
              align="right"
            >
              Last Name
            </TableCell>
            <TableCell
              sx={[tableHeaderStyle, { width: 40, color: commonColors.white }]}
              align="right"
            >
              First Name
            </TableCell>
            <TableCell
              sx={[tableHeaderStyle, { width: 70, color: commonColors.white }]}
              align="right"
            >
              Skills
            </TableCell>
            <TableCell
              sx={[tableHeaderStyle, { width: 40, color: commonColors.white }]}
              align="right"
            >
              Ranking
            </TableCell>
            <TableCell
              sx={[tableHeaderStyle, { width: 40, color: commonColors.white }]}
              align="right"
            >
              Years of Experience
            </TableCell>
            <TableCell
              sx={[tableHeaderStyle, { width: 150, color: commonColors.white }]}
              align="right"
            >
              Education
            </TableCell>
            <TableCell
              sx={[tableHeaderStyle, { width: 150, color: commonColors.white }]}
              align="right"
            >
              Address
            </TableCell>
            <TableCell
              sx={[tableHeaderStyle, { width: 150, color: commonColors.white }]}
              align="right"
            >
              Certification
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows &&
            rows.length > 0 &&
            rows?.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell align="center" component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  <Chip
                    label={row.lastName}
                    onClick={() => navigate(`${userPage}/${row.userId}`)}
                  />
                </TableCell>
                <TableCell align="center">{row.firstName}</TableCell>
                <TableCell align="center">
                  {row?.skillsList?.join(", ")}
                </TableCell>

                <TableCell align="center">{row.skillsRanking}</TableCell>
                <TableCell align="center">{row.anniEsperienza}</TableCell>
                <TableCell align="center">{row.educationList}</TableCell>
                <TableCell align="center">{row.residenceInfo}</TableCell>
                <TableCell align="center">{row.certificationList}</TableCell>
              </TableRow>
            ))}
          {rows?.length === 0 && (
            <TableRow>
              <TableCell align="center" component="th" scope="row">
                Nessun risultato
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
