import { Paper, Table, TableContainer } from "@mui/material";
import { TableHeaderBuild } from "../TableHeaderBuild";
import useApi from "../../../../utilities/useApi";
import { allTabledata } from "../../SkillsTable.controller";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import { TableBodyBuild } from "../TableBodyBuild";
import { PaginationBuild } from "../PaginationBuild";
import { generatePayloadForTableFilter } from "../../../../utilities/generatePayloadForTableFilter";
import { TableData, TableDataData } from "../../types";

export const Wrapper = () => {
  const filterStore = useSelector((state: ReduxStore) => state.search);
  const skillsFilterStore = useSelector((state: ReduxStore) => state.skills);
  const paginationFilterStore = useSelector(
    (state: ReduxStore) => state.pagination
  );
  const sortingFilterStore = useSelector((state: ReduxStore) => state.sorting);
  const andOrFilter = useSelector((state: ReduxStore) => state.andOrStore);
  const allCertificationsID =
    filterStore?.filters?.certification?.map(
      (certification) => certification.id
    ) ?? [];
  const allSkillsFilter = skillsFilterStore?.skills.map(
    (skill) => `${skill.id};${skill.operator}${skill.level}`
  );
  const paginationFilterNumber = paginationFilterStore?.itemNumber;
  const paginationFilterPage = paginationFilterStore?.pageStart;
  const sortingManagementFilter = sortingFilterStore.sort.map(
    (sort) => `${sort.order}`
  );
  const andOrSelectorFilter = andOrFilter.andOr;

  function createData(
    userId: string,
    lastName: string,
    firstName: string,
    skillsList: string[] | undefined,
    skillsRanking: string | undefined,
    anniEsperienza: string | undefined,
    educationList: string,
    residenceInfo: string,
    certificationList: string
    // checked: boolean = false
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
      // checked,
    };
  }

  const tableData: TableDataData[] =
    useApi(
      allTabledata(
        generatePayloadForTableFilter({
          filterStore,
          allCertificationsID,
          allSkillsFilter,
          paginationFilterNumber,
          paginationFilterPage,
          sortingManagementFilter,
          andOrSelectorFilter,
        })
      )
    ).data ?? [];
  const tableData2: TableData = {
    data: tableData,
    pagination: undefined,
  };
  //vedere dove parte la chiamata per la tabella, far ripartire le chiamate che riempiono le varie select ma con i parametri nuovi che esistono già
  const totalCount =
    tableData2.data.data &&
    tableData2.data.data[tableData2.data.data.length - 1];
  console.log(tableData2.data.data);
  const rows = tableData2.data.data
    ? tableData2?.data.data.map((data: TableDataData) =>
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
          // false
        )
      )
    : [];

  // let numberOfProperties: number = 0;
  // if (rows) {
  //   numberOfProperties = Object.keys(rows).length;
  // } else {
  //   numberOfProperties = 0;
  // }

  // const [check, setCheck] = useState<TableData[]>([]);

  return (
    //TODO: capire perché si spacca quando []/undefined/null come risultato
    //TODO: cambiare nome componente in : TableHeader & TableBody ----- non me lo fa fare perchè "tableheader e tablebody" sono componenti di mui
    <TableContainer component={Paper}>
      <PaginationBuild totalRowsNumber={totalCount} />
      <Table sx={{ minWidth: 650 }} aria-label="skills table">
        <TableHeaderBuild />
        {/* <TableBodyBuild rows={rows} check={check} setCheck={setCheck} /> */}
        <TableBodyBuild rows={rows} />
      </Table>
    </TableContainer>
  );
};
