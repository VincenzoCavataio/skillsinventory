import {
  CompiledFields,
  CompiledFieldsWithID,
  ResponseElementObjectData,
} from "../../pages/DashboardPage/types";

type Label = keyof CompiledFields;

export type InputSelectType = {
  selectedInput: CompiledFieldsWithID;
  setSelectedInput: (value: React.SetStateAction<CompiledFieldsWithID>) => void;
  data?: ResponseElementObjectData[];

  label: Label;
  objKey:
    | "educationalLevel"
    | "institute"
    | "course"
    | "certification"
    | "city";
  width: number;
};
