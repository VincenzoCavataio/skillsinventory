import { Container } from "@mui/material";
import SkillCard from "../SkillCard";
import style from "./style";

const SkillsContainer = ({ skills }: { skills: string[] }) => {
  return (
    <Container maxWidth="xl" sx={style.container}>
      {skills.map((skill) => (
        <SkillCard key={skill} name={skill} />
      ))}
    </Container>
  );
};

export default SkillsContainer;
