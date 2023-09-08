import { CSSProperties } from "@mui/styled-engine";

const style: Record<string, CSSProperties> = {
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
};

export default style;
