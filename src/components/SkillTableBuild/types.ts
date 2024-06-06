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
  rows: number;
  totalRowsNumber?: Record<"totalResult", number>;
};

export type TableData = {
  userId: string;
  lastName: string;
  firstName: string;
  skillsList?: string[];
  skillsRanking?: string;
  anniEsperienza?: string;
  educationList: string;
  residenceInfo: string;
  certificationList: string;
};
