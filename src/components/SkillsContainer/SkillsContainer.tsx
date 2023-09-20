import { Container } from "@mui/material";
import style from "../../pages/DashboardPage/style";
import SkillBadge from "../SkillBadge";

const SkillsContainer = ({ skills }: { skills: string[] }) => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        ...style.container,
        mt: 0,
        transition: "all .2s",
        overflowX: "scroll",
        justifyContent: "left",
        flexWrap: "nowrap",
      }}
    >
      {skills.map((skill) => (
        <SkillBadge name={skill} />
      ))}
    </Container>
  );
};

export default SkillsContainer;
