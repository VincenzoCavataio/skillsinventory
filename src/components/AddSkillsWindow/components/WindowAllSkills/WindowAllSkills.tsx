import React from "react";
import { ResponseElementObjectData } from "../../../../pages/DashboardPage/types";
import { t } from "i18next";
import { SkillRow } from "../SkillRow";
import { FixedSizeList as List } from "react-window";
import { Box } from "@mui/material";

const LIST_PROPS = { height: 150, itemSize: 30, width: 250 };

type Props = {
  data: ResponseElementObjectData[];
  setMappedData: React.Dispatch<
    React.SetStateAction<ResponseElementObjectData[]>
  >;
};

export const WindowAllSkills = ({ data, setMappedData }: Props) => {
  const onClick = React.useCallback(
    (element: ResponseElementObjectData) => {
      setMappedData((prevData) =>
        prevData.map((el) =>
          el.name === element.name
            ? {
                ...el,
                selected: !el.selected,
              }
            : el
        )
      );
    },
    [setMappedData]
  );

  if (!data?.length) {
    return <SkillRow label={t("pages.userPage.info.noSkillsFound")} />;
  }

  return (
    <List
      height={LIST_PROPS.height}
      itemCount={data.length}
      itemSize={LIST_PROPS.itemSize}
      width={LIST_PROPS.width}
    >
      {({ index, style }) => {
        /** More style to let string be on same line */
        style.whiteSpace = "nowrap";
        style.width = "100%";

        return (
          <Box sx={style}>
            <SkillRow
              key={data[index].id}
              row={data[index]}
              onClick={() => onClick(data[index])}
              label={data[index].name}
            />
          </Box>
        );
      }}
    </List>
  );
};
