export type HeadCell = {
  disablePadding: boolean;
  id: keyof TableData;
  label: string;
  numeric: boolean;
};

export type TableData = {
  userId: string;
  lastName: string;
  firstName: string;
  skillsList: string[];
  skillsRanking: string;
  anniEsperienza?: string;
  educationList?: string;
  residenceInfo?: string;
  certificationList?: string;
};
