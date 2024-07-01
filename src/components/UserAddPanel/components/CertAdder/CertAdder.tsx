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
import { useTranslation } from "react-i18next";
import { NEXTRE_ENG } from "../../../../common/commonColors";

type CertTableBodyBuildProps = {
  rows: CertRowType[];
  setRowsCertTable: Dispatch<SetStateAction<CertRowType[]>>;
};
export const CertAdder: React.FC<CertTableBodyBuildProps> = ({
  rows,
  setRowsCertTable,
}) => {
  const { t } = useTranslation();
  const certHeadCells: readonly CertHeadCells[] = [
    {
      t: "",
      id: "name",
      date: false,
      label: t("pages.userPage.tables.nameInTables"),
      checkbox: false,
    },
    {
      t: "",
      id: "issuer",
      date: false,
      label: t("pages.userPage.tables.issuerInTables"),
      checkbox: false,
    },
    {
      t: "",
      id: "release date",
      date: true,
      label: t("pages.userPage.tables.releaseInTables"),
      checkbox: false,
    },
    {
      t: "",
      id: "expiration date",
      date: true,
      label: t("pages.userPage.tables.expirationInTables"),
      checkbox: false,
    },
    {
      t: "",
      id: "code",
      date: false,
      label: t("pages.userPage.tables.codeInTables"),
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
      sx={{
        marginTop: 2,
        width: "100%",
        overflowX: "auto",
        border: `solid 0.5px ${NEXTRE_ENG}`,
      }}
      elevation={0}
    >
      <Table
        sx={{ minWidth: 650, tableLayout: "fixed" }}
        aria-label="skills table"
      >
        <TableHead>
          <TableRow>
            {certHeadCells.map((headCell) => (
              <TableCell
                sx={{
                  color: NEXTRE_ENG,
                  fontWeight: "550",
                  fontSize: 14,
                  width: headCell.checkbox ? "20px" : "187px",

                  textAlign: headCell.checkbox ? "center" : undefined,
                }}
                key={headCell.id}
              >
                {headCell.label}
              </TableCell>
            ))}
            <TableCell width="49px"></TableCell>
          </TableRow>
        </TableHead>
        <CertAdderBody rows={rows} setRowsCertTable={setRowsCertTable} />
      </Table>
    </TableContainer>
  );
};
