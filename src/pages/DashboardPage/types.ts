export type ResponseElementObjectData = {
  id: number;
  name: string;
  selected?: boolean;
  selectedToBeDeleted?: boolean;
};
export type CompiledFields = {
  fullName?: string;
  skill?: string;
  certification?: string;
  city?: string;
  educationalLevel?: string;
  institute?: string;
  course?: string;
};
export type Values = {
  value: string;
  id: number;
};

export type CompiledFieldsWithID = {
  //try
  id?: number;
  name?: string;
  selected?: boolean;
  selectedToBeDeleted?: boolean;
  //try
  fullName?: string;
  certification?: Values[];
  city?: string[];
  educationalLevel?: Values;
  institute?: Values;
  course?: Values;
};
