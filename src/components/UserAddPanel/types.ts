export type EduHeadCells = {
  t: string;
  id: string;
  menu: boolean;
  label: string;
  checkbox: boolean;
};

export type CertHeadCells = {
  t: string;
  id: string;
  date: boolean;
  label: string;
  checkbox: boolean;
};

export type SkillHeadCells = {
  id: string;
  label: string;
  numeric: boolean;
};

export type SkillRowType = {
  nameTxtField: string;
  levelInput: number;
  expInput: number;
  noteTxtField: string;
  id: number;
};
export type EduRowType = {
  courseTxtField: string;
  levelMenu: string;
  itChckbx: boolean;
  instTxtField: string;
  cityTxtField: string;
  id: number;
};
export type CertRowType = {
  nameTxtField: string;
  issuerTxtField: string;
  releaseDate: string;
  expDate: string;
  itChckbx: boolean;
  codeTxtField: string;
  id: number;
};
