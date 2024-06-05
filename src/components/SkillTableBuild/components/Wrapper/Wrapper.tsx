import { Paper, Table, TableContainer } from "@mui/material";
import { TableHeaderBuild } from "../TableHeaderBuild";
import useApi from "../../../../utilities/useApi";
import { allTabledata } from "../../SkillsTable.controller";
import { useSelector } from "react-redux";
import { ReduxStore } from "../../../../redux/types";
import { TableBodyBuild } from "../TableBodyBuild";
import { PaginationBuild } from "../PaginationBuild";
import { generatePayloadForTableFilter } from "../../../../utilities/generatePayloadForTableFilter";
import { TableData } from "../../types";

export const Wrapper = () => {
  const filterStore = useSelector((state: ReduxStore) => state.search);
  const skillsFilterStore = useSelector((state: ReduxStore) => state.skills);
  const paginationFilterStore = useSelector(
    (state: ReduxStore) => state.pagination
  );
  const sortingFilterStore = useSelector((state: ReduxStore) => state.sorting);
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
  const tableData: TableData[] =
    useApi(
      allTabledata(
        generatePayloadForTableFilter({
          filterStore,
          allCertificationsID,
          allSkillsFilter,
          paginationFilterNumber,
          paginationFilterPage,
          sortingManagementFilter,
        })
      )
    ).data ?? [];

  const totalCount = tableData && tableData[tableData.length - 1];

  const rows = tableData
    ? tableData?.map((data: TableData) =>
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
      )
    : [];

  // let numberOfProperties: number = 0;
  // if (rows) {
  //   numberOfProperties = Object.keys(rows).length;
  // } else {
  //   numberOfProperties = 0;
  // }
  // const [checked, setChecked] = useState<TableData[]>([]);
  return (
    //TODO: capire perché si spacca quando []/undefined/null come risultato
    //TODO: cambiare nome componente in : TableHeader & TableBody
    <TableContainer component={Paper}>
      <PaginationBuild totalRowsNumber={totalCount} />
      <Table sx={{ minWidth: 650 }} aria-label="skills table">
        <TableHeaderBuild />
        {/* <TableBodyBuild rows={rows} checked={checked} setChecked={setChecked} /> */}
        <TableBodyBuild rows={rows} />
      </Table>
    </TableContainer>
  );
};
