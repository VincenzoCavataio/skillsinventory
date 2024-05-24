export type HeadCells = {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
  sorted: boolean;
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
  totalRowsNumber?: Record<string, number>;
};
