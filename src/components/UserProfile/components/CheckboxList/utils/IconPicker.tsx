import React from "react";
import * as logos from "devicons-react";
import { Box } from "@mui/material";
import { SPECIFIC_SKILL_NAME_MAPPING } from "../../../../../constants";

export const IconPicker = (skillName: string) => {
  const originalLogosKey = Object.keys(logos);

  const skillNamesWithReplaces =
    SPECIFIC_SKILL_NAME_MAPPING[skillName.toLocaleLowerCase()] ?? skillName;

  /** Trova l'elemento che corrisponde esattamente */
  const fullMatch = originalLogosKey.find(
    (logo) =>
      logo.toLowerCase() === `${skillNamesWithReplaces.toLowerCase()}original`
  );

  /** Trova l'elemento che inizia con la stringa data */
  const startMatch = originalLogosKey.find((logo) => {
    const LOGO_NAME = logo
      .toLowerCase()
      .replace("original", "")
      .replace("wordmark", "")
      .replace("plain", "");
    return skillNamesWithReplaces
      .toLowerCase()
      .startsWith(LOGO_NAME.toLowerCase());
  });

  /** Trova l'elemento che contiene la stringa data */
  const partialMatch = originalLogosKey.find((logo) => {
    const LOGO_NAME = logo.toLowerCase().replace(".", "").endsWith("original")
      ? logo.toLowerCase().replace(".", "")
      : "";

    return LOGO_NAME.toLowerCase().includes(
      skillNamesWithReplaces.toLowerCase()
    );
  });

  const match = (fullMatch ?? partialMatch ?? startMatch) || "BashOriginal";

  return match ? (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Box className="iconsStyle">{React.createElement(logos[match])}</Box>
  ) : (
    <></>
  );
};
