import { Dispatch, SetStateAction } from "react";
import {
  CompiledFields,
  ResponseElementObjectData,
} from "../../pages/DashboardPage/types";

type Label = keyof CompiledFields;

export type InputSelectType = {
  selectedInput: CompiledFields;
  setSelectedInput: Dispatch<SetStateAction<Record<string, string>>>;
  data?: { final_object?: ResponseElementObjectData[] };
  label: Label;
  objKey: string;
  width?: number;
};
