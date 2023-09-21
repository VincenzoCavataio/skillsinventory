import { Slider, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { commonColors } from "../../common/commonColors";
import SliderToggles from "../SliderToggles";
import { SWITCH_TYPE } from "./../../constants";
import { t } from "i18next";

const SliderComponent = (props: {
  sliderValue?: number;
  setSliderValue?: Dispatch<SetStateAction<number | number[]>>;
}) => {
  const [value, setValue] = useState(1);
  const [sliderType, setSliderType] = useState("from");
  const { sliderValue, setSliderValue } = props;

  return (
    <>
      <SliderToggles sliderType={sliderType} setSliderType={setSliderType} />
      <Slider
        aria-label="Always visible"
        style={{ maxWidth: 280, marginTop: 10 }}
        max={5}
        min={1}
        disabled={false}
        value={sliderValue || value}
        marks
        onChange={(_, newValue) =>
          setSliderValue
            ? setSliderValue(Number(newValue))
            : setValue(Number(newValue))
        }
        valueLabelDisplay="auto"
      />
      <Typography component={"p"} color={commonColors.subtitle}>{`${t(
        `pages.dashboard.slider.${SWITCH_TYPE[sliderType]}`
      )} Livello ${value}`}</Typography>
    </>
  );
};

export default SliderComponent;
