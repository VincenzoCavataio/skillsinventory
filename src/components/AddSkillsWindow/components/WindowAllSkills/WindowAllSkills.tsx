import { Box, Typography } from "@mui/material";
import { ResponseElementObjectData } from "../../../../pages/DashboardPage/types";
import { NEXTRE_ENG } from "../../../../common/commonColors";
import { IconPicker } from "../../../UserProfile/components/CheckboxList/utils/IconPicker";
import { t } from "i18next";

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
      {!data?.length && (
        <Typography variant="caption" my={2}>
          {t("pages.userPage.info.noSkillsFound")}
        </Typography>
      )}
      {data?.map((e) => (
        <li
          key={e.id}
          style={{
            background: e.selected ? NEXTRE_ENG : "transparent",
            color: e.selected ? "white" : "black",
            cursor: "pointer",
            display: "flex",
            marginTop: 4,
          }}
          onClick={() => onClick(e)}
        >
          <Box sx={{ transform: "scale(.9)", mt: 0.75, ml: 1 }}>
            {IconPicker(e.name)}
          </Box>
          <Typography variant="button">{e.name}</Typography>
        </li>
      ))}
    </ul>
  );
};
