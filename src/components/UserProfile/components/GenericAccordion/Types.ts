import { Dispatch, SetStateAction } from "react";

type State = {
  hardSkills: boolean;
  education: boolean;
  certificates: boolean;
};

export type Props = {
  action: Dispatch<SetStateAction<State>>;
  label: "hardSkills" | "education" | "certificates";
  state: State;
};

export type AccordionLabel = "hardSkills" | "education" | "certificates";
