export type HeadCells = {
  t: string;
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
  sorted: boolean;
  sortingBE?: string;
  color?: boolean;
};
export type HeaderCustomCellProps = {
  headCell: HeadCells;
  visible: number;
};

export type TablePaginationActionsProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
};
export type PaginationBuildProps = {
  rows?: number;
  totalRowsNumber: number;
};

export type TableDataResponse = {
  data?: TableDataData[];
  error?: string;
  loading?: boolean;
  pagination?: TableDataPagination;
};
export type TableDataData = {
  userId: string;
  lastName: string;
  firstName: string;
  skillsList?: string[];
  skillsRanking?: string;
  anniEsperienza?: string;
  educationList: string;
  residenceInfo: string;
  certificationList: string;
  isAnd?: string;
};
export type TableDataPagination = {
  count: number;
  pageNum: number;
  pageSize: number;
};
