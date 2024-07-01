import { Dispatch, SetStateAction } from "react";

export type State = {
  hardSkills: boolean;
  education: boolean;
  certificates: boolean;
};
export type StateDelete = {
  hardSkills: boolean;
  education: boolean;
  certificates: boolean;
};
export type Props = {
  action: Dispatch<SetStateAction<State>>;
  actionDelete: Dispatch<SetStateAction<StateDelete>>;
  label: "hardSkills" | "education" | "certificates";
  state: State;
  stateDelete: StateDelete;
  data?: string[];
};

export type AccordionLabel = "hardSkills" | "education" | "certificates";
