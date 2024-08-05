import React from "react";
import * as logos from "devicons-react";
import { Box } from "@mui/material";

export const IconPicker = (skillName: string) => {
  const originalLogosKey = Object.keys(logos);

  const SPECIFIC_SKILL_NAME_MAPPING: Record<string, string> = {
    "c++": "cplusplus",
    sql: "database",
    "ms-sql": "database",
    "pl-sql": "database",
    "no-sql": "database",
    dbms: "database",
    "react.js": "react",
    "node.js": "node",
    aws: "amazon",
    web: "chrome",
  };

  const skillNamesWithReplaces =
    SPECIFIC_SKILL_NAME_MAPPING[skillName.toLocaleLowerCase()] ?? skillName;

  // Trova l'elemento che corrisponde esattamente
  const fullMatch = originalLogosKey.find(
    (logo) =>
      logo.toLowerCase() === `${skillNamesWithReplaces.toLowerCase()}original`
  );

  // Trova l'elemento che inizia con la stringa data
  const startMatch = originalLogosKey.find((logo) => {
    const LOGO_NAME = logo.toLowerCase().replace("original", "");
    return skillNamesWithReplaces
      .toLowerCase()
      .startsWith(LOGO_NAME.toLowerCase());
  });

  //  Trova l'elemento che contiene la stringa data
  const partialMatch = originalLogosKey.find((logo) => {
    const LOGO_NAME = logo.toLowerCase().replace(".", "").endsWith("original")
      ? logo.toLowerCase().replace(".", "")
      : "";

    return LOGO_NAME.toLowerCase().includes(
      skillNamesWithReplaces.toLowerCase()
    );
  });

  const match = (fullMatch ?? startMatch ?? partialMatch) || "BashOriginal";

  console.log({ match, skillNamesWithReplaces });
  return match ? (
    <Box className="blackAndWhiteIcon">{React.createElement(logos[match])}</Box>
  ) : (
    <></>
  );
};
