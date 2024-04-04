import { Container } from "@mui/material";
import SkillCard from "../SkillCard";
import style from "./style";
import { useDispatch, useSelector } from "react-redux";
import { ReduxStore, Skill } from "../../redux/types";
import InputSelect from "../InputSelect";
import { useEffect, useState } from "react";
import { addSkill } from "../../redux/filtersSlice";
import { CompiledFields } from "../../pages/DashboardPage/types";
import useApi from "../../utilities/useApi";
import { allSkillslMetadata } from "../../pages/DashboardPage/DashboardPage.controller";
import { t } from "i18next";

const SkillsContainer = () => {
  const [selectedInput, setSelectedInput] = useState<CompiledFields>({});

  const allSkillslData = useApi(allSkillslMetadata);

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
      }}
    >
      <InputSelect
        selectedInput={selectedInput}
        setSelectedInput={setSelectedInput}
        data={allSkillslData?.data}
        label={t("pages.dashboard.search.selectSkills")}
        objKey={"skill"}
      />

      <Container
        maxWidth="xl"
        sx={{
          ...style.container,
          overflowX: allSkills?.length > 0 ? "scroll" : "hidden",
          padding: allSkills.length > 0 ? 2 : 0,
        }}
      >
        {allSkills?.map((skill) => (
          <SkillCard key={skill.label} name={skill.label} />
        ))}
      </Container>
    </Container>
  );
};

export default SkillsContainer;
