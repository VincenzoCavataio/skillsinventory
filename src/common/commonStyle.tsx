import { CSSProperties } from "@mui/styled-engine";

const commonStyle: Record<string, CSSProperties> = {
  padding1: { padding: 1 },
  marginRight2: { marginRight: 2 },
  colorWhite: { color: "white" },
  flexEnd: { display: "flex", justifyContent: "flex-end" },
  spaceBetween: { display: "flex", justifyContent: "space-between" },
  advancedSearchElement: { margin: 2, width: "100%" },
};

export default commonStyle;
