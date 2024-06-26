import { Slider, Typography } from "@mui/material";
import { useState } from "react";
import { commonColors } from "../../common/commonColors";
import SliderToggles from "../SliderToggles";
import { SWITCH_TYPE } from "./../../constants";
import { t } from "i18next";
import { SliderType } from "../../common/commonTypes";

const SliderComponent = ({ sliderType, setSliderType }: SliderType) => {
  const [value, setValue] = useState(1);

  return (
    <>
      <SliderToggles sliderType={sliderType} setSliderType={setSliderType} />
      <Slider
        aria-label="Always visible"
        style={{ maxWidth: 280, marginTop: 10 }}
        max={5}
        min={1}
        disabled={false}
        value={value}
        marks
        onChange={(_, newValue) => setValue(Number(newValue))}
        valueLabelDisplay="auto"
      />
      <Typography component={"p"} color={commonColors.subtitle}>{`${t(
        `pages.dashboard.slider.${SWITCH_TYPE[sliderType]}`
      )} Livello ${value}`}</Typography>
    </>
  );
};

export default SliderComponent;
