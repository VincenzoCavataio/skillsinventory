export type Skill = {
  name: string;
  operator: string;
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
