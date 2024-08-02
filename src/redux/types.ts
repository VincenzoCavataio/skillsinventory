import { CertRowType, EduRowType } from "../components/UserAddPanel/types";
import { HIDDEN_PROP } from "../constants";
import { CompiledFieldsWithID } from "../pages/DashboardPage/types";

/** QUANDO BE FIXA CAMBIAMO IN SOLO STRING */
export type Skill = {
  name: string;
  operator: Record<string, string> | string;
  level: number;
  id?: number;
  selected?: boolean;
  selectedToBeDeleted?: boolean;
};

export type Filters = {
  skills: Skill[];
  fullName: string;
  cities: string[];
  certifications: string[];
  institute: string;
  course: string;
};

export type CheckedSkill = {
  name: string;
  id: string;
  level: string;
  note: string;
  exp: string;
};
export type CheckedSkills = { checkedSkills: CheckedSkill[] };

export type ReduxStore = {
  filters?: Filters;
  skills?: { skills: Skill[] };
  search?: { filters: Omit<CompiledFieldsWithID, "skill"> };
  user?: ProfilePageType;
  pagination: PaginationSettings;
  sorting: { sort: Sorting[] };
  andOrStore: SelectorAndOr;
  lang: string;
  checkboxManager: number[];
  editManager: EditMode;
  rowsManager: RowsManagement;
  checkedSkills: CheckedSkills;
};

export type RowsManagement = {
  skillRows: number;
  eduRows: number;
  certRows: number;
  skillRowsData: SkillRowType[];
  eduRowsData: EduRowType[];
  certRowsData: CertRowType[];
  checked: string[];
};

export type SkillRowType = {
  nameTxtField: string;
  levelInput: number;
  expInput: number;
  noteTxtField: string;
  id: number;
};

export type SelectorAndOr = {
  andOr: string;
};

export type Filtri = {
  skills: Skill[];
  fullName: string;
  cities: string[];
  certifications: string[];
  institute: string;
  course: string;
  eduLevel: string;
};
export type ProfilePageType = {
  user?: ResponseProfileElementObjectData;
  alt?: string;
  src?: string;
};

export type ResponseProfileElementObjectData = {
  actualEmploymentDate: string;
  birthDate?: string;
  driver_license?: 0 | 1 | string | boolean;
  email_login: string;
  firstEmploymentDate: string;
  firstName: string;
  gender?: string;
  id?: number;
  lastName: string;
  personalPhoneNumber: string;
  residence?: Residence;
  user_skill?: UserSkill;
  workPhoneNumber: string;
  dataType?: "full" | string;
};

export type Residence = {
  address?: string;
  address_number?: number;
  city?: string;
  latitude?: number | HIDDEN_PROP;
  longitude?: number | HIDDEN_PROP;
  nation?: string;
  province?: string;
  zip_code?: string;
};

export type UserSkill = {
  certificationList?: string[];
  educationList?: string[];
  skillList?: string[];
};
export type PaginationSettings = {
  itemNumber: number;
  pageStart: number;
};
export type Sorting = {
  order: string;
  label: string;
  colorUp: boolean;
  colorDown: boolean;
};
export type EditMode = {
  isActive: boolean;
  editPayload?: ResponseProfileElementObjectData;
  userData?: ResponseProfileElementObjectData;
};
