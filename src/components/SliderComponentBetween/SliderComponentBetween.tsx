import { Slider, Typography } from "@mui/material";
import { useState } from "react";
import { commonColors } from "../../common/commonColors";
import SliderToggles from "../SliderToggles";
import { SWITCH_TYPE } from "../../constants";
import { t } from "i18next";
import { SliderType } from "../../common/commonTypes";

const SliderComponent = ({ sliderType, setSliderType }: SliderType) => {
  const [values, setValues] = useState([2, 4]);

  console.log("VALUES", values);

  return (
    <>
      <SliderToggles sliderType={sliderType} setSliderType={setSliderType} />
      <Slider
        style={{ maxWidth: 280, marginTop: 10 }}
        max={5}
        min={1}
        disabled={false}
        value={values}
        marks
        onChange={(_, newValue) => setValues(newValue as number[])}
        valueLabelDisplay="auto"
      />
      <Typography component={"p"} color={commonColors.subtitle}>{`${t(
        `pages.dashboard.slider.${SWITCH_TYPE[sliderType]}`
      )} Livello ${values[0]} ${t(`common.and`)} ${values[1]}`}</Typography>
    </>
  );
};

export default SliderComponent;
