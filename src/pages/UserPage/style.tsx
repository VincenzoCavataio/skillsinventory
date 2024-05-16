import { CSSProperties } from "@mui/styled-engine";

export const style: Record<string, CSSProperties> = {
  wrapper: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "white",
  },
  element: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "20vh",
    backgroundColor: "white",
  },
  container: {
    background: "transparent",
    marginTop: 2,
    padding: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    overflowX: "scroll",
  },
  container2: {
    background: "transparent",
    marginTop: 2,
    padding: 2,
    display: "flex",
    overflowX: "scroll",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "nowrap",
  },
  box1: {
    background: "white",
    display: "flex",
    overflowX: "scroll",
    flexDirection: "column",
    alignItems: "center",
    flexWrap: "nowrap",
    width: "39.5%",
  },
  box2: {
    paddingTop: "8px",
    background: "white",
    display: "flex",
    overflowX: "scroll",
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "59.5%",
  },
};