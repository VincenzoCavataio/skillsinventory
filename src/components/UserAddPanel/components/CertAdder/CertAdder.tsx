import {
  Paper,
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { CertHeadCells } from "../../types";
import { CertAdderBody } from "../CertAdderBody";
import { useTranslation } from "react-i18next";
import { PRIMARY_COLOR } from "../../../../common/commonColors";
import { checkboxCertsSelector } from "../../../../redux/checkboxCertsSelection";
import { useSelector } from "react-redux";

export const CertAdder = () => {
  const { t } = useTranslation();
  const checkedCertsFromStore = useSelector(checkboxCertsSelector);

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
  if (checkedCertsFromStore.length === 0) {
    return;
  }
  return (
    <TableContainer
      component={Paper}
      sx={{
        marginTop: 2,
        width: "100%",
        overflowX: "auto",
        border: `solid 0.5px ${PRIMARY_COLOR}`,
        maxHeight: 400,
        scroll: "auto",
      }}
      elevation={0}
    >
      <Table
        sx={{ minWidth: 650, tableLayout: "fixed" }}
        stickyHeader
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow>
            {certHeadCells.map((headCell) => (
              <TableCell
                sx={{
                  color: PRIMARY_COLOR,
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
        <CertAdderBody />
      </Table>
    </TableContainer>
  );
};
