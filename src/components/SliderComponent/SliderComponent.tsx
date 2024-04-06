import { Slider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { commonColors } from "../../common/commonColors";
import SliderToggles from "../SliderToggles";
import { SWITCH_TYPE } from "./../../constants";
import { t } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { editSkillLevel } from "../../redux/filtersSlice";
import { ReduxStore, Skill } from "../../redux/types";

const SliderComponent = ({ name }: { name: string }) => {
  const [value, setValue] = useState<number | number[]>(1);
  const dispatch = useDispatch();

  const sliderLevelType = useSelector(
    (state: ReduxStore) =>
      state?.filters?.skills?.find((e: Skill) => e?.label === name)
        ?.levelType as string
  );

  const IS_BETWEEN = sliderLevelType === "between";

  useEffect(() => {
    if (IS_BETWEEN) {
      setValue([1, 2]);
    } else {
      setValue(1);
    }
  }, [IS_BETWEEN]);

  useEffect(() => {
    dispatch(editSkillLevel({ name, value }));
  }, [dispatch, name, value]);

  return (
    <>
      <SliderToggles name={name} />
      <Slider
        style={{ maxWidth: 280, marginTop: 10 }}
        size="small"
        max={5}
        min={1}
        disabled={false}
        value={value}
        marks
        onChange={(_, newValue) => setValue(newValue)}
        valueLabelDisplay="auto"
      />
      {IS_BETWEEN && typeof value !== "number" ? (
        <Typography component={"p"} color={commonColors.subtitle}>{`${t(
          `pages.dashboard.slider.between`
        )} Livello ${value[0]} ${t(`common.and`)} ${value[1]}`}</Typography>
      ) : (
        <Typography component={"p"} color={commonColors.subtitle}>{`${t(
          `pages.dashboard.slider.${SWITCH_TYPE[sliderLevelType]}`
        )} Livello ${value}`}</Typography>
      )}
    </>
  );
};

export default SliderComponent;
