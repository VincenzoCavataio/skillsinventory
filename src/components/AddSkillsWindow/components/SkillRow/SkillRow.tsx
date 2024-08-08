import { Button, Typography } from "@mui/material";
import { NEXTRE_ENG } from "../../../../common/commonColors";
import { ResponseElementObjectData } from "../../../../pages/DashboardPage/types";
import { useSelector } from "react-redux";
import { skillsSelector } from "../../../../redux/skillsSlice";

type Props = {
  label: string;
  onClick?: (element: ResponseElementObjectData) => void;
  row?: ResponseElementObjectData;
};

export const SkillRow = ({ label, onClick, row }: Props) => {
  const selectedSkills = useSelector(skillsSelector)?.skills ?? [];

  const isSelected = row?.selected;
  const isNotSkill = !row;

  const alreadySelectedSkill = selectedSkills
    .map((skill) => skill.id)
    .includes(row?.id);

  const notSelectedStyle = {
    background: isSelected ? NEXTRE_ENG : "transparent",
    color: isSelected ? "white" : "black",
    cursor: isNotSkill ? "default" : "pointer",
    display: "flex",
    marginTop: row ? 2 : 0,
  };

  return (
    <li
      key={row?.id ?? label}
      className={isSelected || isNotSkill ? "" : "hoverList"}
      style={notSelectedStyle}
    >
      <Button
        variant="text"
        fullWidth
        disabled={alreadySelectedSkill || isNotSkill}
        onClick={() => onClick && row && onClick(row)}
        sx={{
          display: "flex",
          justifyContent: "left",
          bgcolor: alreadySelectedSkill ? "gray" : "transparent",
          py: 0.3,
          pl: isNotSkill ? 0 : 1,
        }}
      >
        <Typography
          color={alreadySelectedSkill || isSelected ? "white" : "black"}
        >
          {label}
        </Typography>
      </Button>
    </li>
  );
};
