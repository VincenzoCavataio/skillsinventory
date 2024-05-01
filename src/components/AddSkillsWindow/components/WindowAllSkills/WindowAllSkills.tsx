import { Typography } from "@mui/material";
import { ResponseElementObjectData } from "../../../../pages/DashboardPage/types";
import { commonColors } from "../../../../common/commonColors";

type Props = { data: ResponseElementObjectData[] } & {
  setMappedData: React.Dispatch<
    React.SetStateAction<ResponseElementObjectData[]>
  >;
};

export const WindowAllSkills = ({ data, setMappedData }: Props) => {
  const onClick = (element: ResponseElementObjectData) => {
    if (data) {
      setMappedData(
        data.map((el: ResponseElementObjectData) =>
          el.name === element.name
            ? { name: el.name, id: el.id, selected: !el.selected }
            : el
        )
      );
    }
  };
  return (
    <ul
      className="custom-scrollbars"
      style={{
        background: "white",
        width: 250,
        height: "calc('100%' + 20px) !important",
        overflowY: "scroll",
        display: "flex",
        flexDirection: "column",
        justifyContent: "normal",
        listStyle: "none",
        paddingLeft: 8,
        margin: 0,
      }}
    >
      {data?.map((e) => (
        <li
          style={{
            background: e.selected ? commonColors.accentColor : "transparent",
            color: e.selected ? "white" : "black",
            cursor: "pointer",
            padding: 2,
            marginBottom: 2,
          }}
          onClick={() => onClick(e)}
        >
          <Typography variant="caption">{e.name}</Typography>
        </li>
      ))}
    </ul>
  );
};
