import { Container } from "@mui/material";
import SkillCard from "../SkillCard";
import style from "./style";

const SkillsContainer = ({
  skills,
}: {
  skills: { label: string; levelType: string }[];
}) => {
  return (
    <Container maxWidth="xl" sx={style.container}>
      {skills.map((skill) => (
        <SkillCard key={skill.label} name={skill.label} />
      ))}
    </Container>
  );
};

export default SkillsContainer;
