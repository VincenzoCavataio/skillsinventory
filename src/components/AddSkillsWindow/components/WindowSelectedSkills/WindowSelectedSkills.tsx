import { Typography } from "@mui/material";
import { ResponseElementObjectData } from "../../../../pages/DashboardPage/types";
import { commonColors } from "../../../../common/commonColors";
import { useSelector } from "react-redux";
import { ReduxStore, Skill } from "../../../../redux/types";

// type Props = { data: ResponseElementObjectData[] } & {
//   setMappedData: React.Dispatch<
//     React.SetStateAction<ResponseElementObjectData[]>
//   >;
// };

export const WindowSelectedSkills = () => {
  // TODO: { data, setMappedData }: Props
  const skillsInStore = useSelector((state: ReduxStore) => state.skills);
  console.log({ skillsInStore });

  const onClick = (element: Skill) => {
    // if (data) {
    //   setMappedData(
    //     data.map((el: ResponseElementObjectData) =>
    //       el.name === element.name
    //         ? { name: el.name, id: el.id, selected: !el.selected }
    //         : el
    //     )
    //   );
    // }
    console.log({ element });
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
      {skillsInStore?.skills.map((skill: Skill) => (
        <li
          style={{
            background: skill.selected
              ? commonColors.accentColor
              : "transparent",
            color: skill.selected ? "white" : "black",
            cursor: "pointer",
            padding: 2,
            marginBottom: 2,
          }}
          onClick={() => onClick(skill)}
        >
          <Typography variant="caption">{`${skill.label} ${skill.levelType} ${skill.level}`}</Typography>
        </li>
      ))}
      {skillsInStore?.skills.length === 0 && (
        <li>
          <Typography variant="caption">No skills selected</Typography>
        </li>
      )}
    </ul>
  );
};
