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
            ? {
                name: el.name,
                id: el.id,
                selected: !el.selected,
                selectedToBeDeleted: el.selectedToBeDeleted,
              }
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
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "normal",
        listStyle: "none",
        paddingLeft: 8,
        margin: 0,
        height: "calc( 100% - 30px) ",
      }}
    >
      {data?.map((e) => (
        <li
          key={e.id}
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
