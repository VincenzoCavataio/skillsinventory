import { Box, Typography } from "@mui/material";
import { commonColors } from "../../../../common/commonColors";
import { useSelector } from "react-redux";
import { ReduxStore, Skill } from "../../../../redux/types";
import { useTranslation } from "react-i18next";
import { ResponseElementObjectData } from "../../../../pages/DashboardPage/types";
type Props = {
  data?: ResponseElementObjectData[];
  setMappedData?: React.Dispatch<
    React.SetStateAction<ResponseElementObjectData[]>
  >;
  selectedElements: number[];
  setSelectedElements: React.Dispatch<React.SetStateAction<number[]>>;
};

export const WindowSelectedSkills = ({
  selectedElements,
  setSelectedElements,
}: Props) => {
  const { t } = useTranslation();
  const skillsInStore = useSelector((state: ReduxStore) => state.skills);

  const highlightSelectedSkills = (skill: Skill) => {
    const idList = skillsInStore?.skills.map((skill) => skill.id);
    if (skill?.id && idList?.includes(skill.id)) {
      if (!selectedElements.includes(skill.id)) {
        setSelectedElements([...selectedElements, skill.id]);
      } else {
        const filteredElements = selectedElements.filter(
          (element) => element !== skill.id
        );
        setSelectedElements(filteredElements);
      }
    }
  };

  return (
    <Box>
      <Typography
        variant="body1"
        sx={{ borderBottom: "dashed 1px #949494", pb: 0.5 }}
      >
        {t("pages.dashboard.search.risultato")}
      </Typography>
      <ul
        className="custom-scrollbars"
        style={{
          background: "white",
          width: 250,
          height: "calc(100% - 20px) ",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "normal",
          listStyle: "none",
          paddingLeft: 6,
          margin: 0,
        }}
      >
        {skillsInStore?.skills.map((skill: Skill) => {
          const isIdIncluded = skill.id && selectedElements.includes(skill.id);
          return (
            <li
              key={skill.id}
              style={{
                background: isIdIncluded
                  ? commonColors.accentColor
                  : "transparent",
                color: isIdIncluded ? "white" : "black",
                cursor: "pointer",
                marginTop: 4,
                padding: 2,
                paddingLeft: 8,
              }}
              onClick={() => highlightSelectedSkills(skill)}
            >
              <Typography variant="button">{`${skill.name} ${skill.operator} ${skill.level}`}</Typography>
            </li>
          );
        })}
        {skillsInStore?.skills.length === 0 && (
          <li>
            <Typography variant="caption">
              {t("pages.dashboard.search.noskillfound")}
            </Typography>
          </li>
        )}
      </ul>
    </Box>
  );
};
