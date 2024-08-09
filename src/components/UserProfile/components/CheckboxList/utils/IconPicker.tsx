import React from "react";
import * as logos from "devicons-react";
import { Box } from "@mui/material";
import { SPECIFIC_SKILL_NAME_MAPPING } from "../../../../../constants";

type SKILL_NAME_MAPPING = string;

/** Utility function to render the icon for a skill taken from the devicons-react library */
export const IconPicker = (skillName: SKILL_NAME_MAPPING) => {
  const originalLogosKey = Object.keys(logos);

  /** Exceptions due to different case or missing reference to icon API */
  const skillNamesWithReplaces =
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    SPECIFIC_SKILL_NAME_MAPPING[skillName.toLocaleLowerCase()] ?? skillName;

  /** Find the element that matches the exact string */
  const fullMatch = originalLogosKey.find(
    (logo) =>
      logo.toLowerCase() === `${skillNamesWithReplaces.toLowerCase()}original`
  );

  /** Find the element that starts with the string */
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

  /** Find the element that contains the string */
  const partialMatch = originalLogosKey.find((logo) => {
    const LOGO_NAME = logo.toLowerCase().replace(".", "").endsWith("original")
      ? logo.toLowerCase().replace(".", "")
      : "";

    return LOGO_NAME.toLowerCase().includes(
      skillNamesWithReplaces.toLowerCase()
    );
  });

  /** Return the match between given string and the logos with 3 levels of priority and a fallback*/
  const match = (fullMatch ?? partialMatch ?? startMatch) || "BashOriginal";

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Box>{React.createElement(logos[match])}</Box>;
};
