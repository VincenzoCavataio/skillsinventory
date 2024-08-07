import { CSSProperties } from "@mui/styled-engine";

export const style: Record<string, CSSProperties> = {
  wrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "white",
  },
  element: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "15vh",
    backgroundColor: "red",
  },
};
