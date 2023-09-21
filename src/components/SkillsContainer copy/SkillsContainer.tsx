import { Container } from "@mui/material";
import SkillCard from "../SkillCard";
import style from "./style";
import { useSelector } from "react-redux";
import { ReduxStore, Skill } from "../../redux/types";
import SubmitButton from "../CustomButton";

const SkillsContainer = () => {
  const allSkills: Skill[] =
    useSelector((state: ReduxStore) => state.filters?.skills) || [];

  return (
    <Container maxWidth="xl" sx={style.container}>
      {allSkills?.map((skill) => (
        <SkillCard key={skill.label} name={skill.label} />
      ))}
      <SubmitButton />
    </Container>
  );
};

export default SkillsContainer;
