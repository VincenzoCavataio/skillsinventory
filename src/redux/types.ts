import { CompiledFieldsWithID } from "../pages/DashboardPage/types";

export type Skill = {
  name: string;
  /** QUANDO BE FIXA CAMBIAMO IN SOLO STRING */
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

export type ReduxStore = {
  filters?: Filters;
  skills?: { skills: Skill[] };
  search?: { filters: Omit<CompiledFieldsWithID, "skill"> };
  user?: ProfilePageType;
  pagination?: PaginationSettings;
  sorting: { sort: Sorting[] };
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
  driver_license?: 0 | 1 | string;
  email_login: string;
  firstEmploymentDate: string;
  firstName: string;
  gender?: string;
  id?: number;
  lastName: string;
  personalPhoneNumber: string;
  residence?: Residenza;
  user_skill?: UserSkill;
  workPhoneNumber: string;
  dataType?: "full" | string;
};

export type Residenza = {
  address: string;
  address_number: number;
  city: string;
  latitude: number;
  longitude: number;
  nation: string;
  province: string;
  zip_code: string;
};

export type UserSkill = {
  certificationList?: string[];
  educationList?: string[];
  skillList?: string[];
};
export type PaginationSettings = {
  itemNumber?: number;
  pageStart: number;
};
export type Sorting = {
  order: string;
  label: string;
};
