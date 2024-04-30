import { Slider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { commonColors } from "../../../common/commonColors";
import { SliderToggles } from "../SliderToggles";
import { t } from "i18next";
import { useDispatch } from "react-redux";
import { editSkillLevel } from "../../../redux/filtersSlice";

export const SliderComponentBetween = ({ name }: { name: string }) => {
  const [values, setValues] = useState([2, 4]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(editSkillLevel({ name, values }));
  }, [dispatch, name, values]);

  return (
    <>
      <SliderToggles name={name} />
      <Slider
        style={{ maxWidth: 280, marginTop: 10 }}
        max={5}
        min={1}
        disabled={false}
        value={values}
        marks
        onChange={(_, newValues) => setValues(newValues as number[])}
        valueLabelDisplay="auto"
      />
      <Typography component={"p"} color={commonColors.subtitle}>{`${t(
        `pages.dashboard.slider.between`
      )} Livello ${values[0]} ${t(`common.and`)} ${values[1]}`}</Typography>
    </>
  );
};
