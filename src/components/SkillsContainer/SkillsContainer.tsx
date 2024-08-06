import { Container } from "@mui/material";
import { style } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore, Skill } from "../../redux/types";
import { useEffect } from "react";
import { addSkill } from "../../redux/filtersSlice";
import { CompiledFields } from "../../pages/DashboardPage/types";
import { SkillBox } from "../SkillBox";

export const SkillsContainer = (selectedInput: CompiledFields) => {
  const allSkills: Skill[] =
    useSelector((state: ReduxStore) => state.filters?.skills) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addSkill({ label: selectedInput.skill, levelType: "from" }));
  }, [dispatch, selectedInput.skill]);

  return (
    <Container
      maxWidth="xl"
      sx={{
        ...style.container,
        overflowX: allSkills?.length > 0 ? "scroll" : "hidden",
        flexDirection: "column",
        padding: allSkills?.length > 0 ? 2 : 0,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          ...style.container,
          padding: 0,
          paddingLeft: "0px !important",
        }}
      >
        {allSkills?.map((skill) => (
          <SkillBox key={skill.label} name={skill.label} />
        ))}
      </Container>
    </Container>
  );
};
