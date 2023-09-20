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
  container: {
    background: "white",
    marginTop: 2,
    padding: 2,
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },
};

export default style;
