import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { NEXTRE_ENG, commonColors } from "../../common/commonColors";
import useApi from "../../utilities/useApi";
import { allTabledata } from "./SkillsTable.controller";

// TODO: componente bozza, da fare per bene
function createData(
  lastName: string,
  firstName: string,
  education: string,
  addressInfo: string,
  certifications: string
) {
  return { lastName, firstName, education, addressInfo, certifications };
}

export const SkillsTable = () => {
  const tableHeaderStyle = {
    fontSize: 16,
    textAlign: "center",
    color: commonColors.white,
  };

  const FAKE_PAYLOAD = {
    "starting-from": "P_FETCH_FIRST:0",
    "number-of-items": "P_OFFSET:20",
    "skill-name": "SKILLS:",
    "certificate-name": "CERTIFICATES:",
    "user-filter": "USERS:",
    isAnd: "OR",
    "name-ascending": "",
    "edu-ascending": "",
    "city-ascending": "",
    "city-filter": "CITIES:",
    "ranking-order": "DEFAULT",
    "course-filter": "COURSES:0",
    "levels-filter": "EDU_LEVELS:0",
    "institute-filter": "INSTITUTES:0",
  };

  //! TOFIX: Fixa cagata Backend
  const tableData = useApi(allTabledata(FAKE_PAYLOAD))?.data;
  if (tableData && tableData[tableData.length - 1].totalResult) tableData.pop();

  const rows = tableData?.map((data) =>
    createData(
      data.lastName,
      data.firstName,
      data.educationList,
      data.residenceInfo,
      data.certificationList
    )
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ background: NEXTRE_ENG }}>
          <TableRow>
            <TableCell sx={[tableHeaderStyle, { width: 10 }]}>N.</TableCell>
            <TableCell sx={[tableHeaderStyle, { width: 40 }]} align="right">
              Last Name
            </TableCell>
            <TableCell sx={[tableHeaderStyle, { width: 40 }]} align="right">
              First Name
            </TableCell>
            <TableCell sx={[tableHeaderStyle, { width: 150 }]} align="right">
              Education
            </TableCell>
            <TableCell sx={[tableHeaderStyle, { width: 150 }]} align="right">
              Address
            </TableCell>
            <TableCell sx={[tableHeaderStyle, { width: 150 }]} align="right">
              Certification
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row, index) => (
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
                {row.lastName}
              </TableCell>
              <TableCell align="center">{row.firstName}</TableCell>
              <TableCell align="center">{row.education}</TableCell>
              <TableCell align="center">{row.addressInfo}</TableCell>
              <TableCell align="center">{row.certifications}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
