import { Slider } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

const SliderComponent = (props: {
  sliderValue: number;
  setSliderValue: Dispatch<SetStateAction<number>>;
}) => {
  const { sliderValue, setSliderValue } = props;
  return (
    <Slider
      aria-label="Always visible"
      style={{ width: 280, marginTop: 10, left: 10 }}
      max={5}
      min={1}
      disabled={false}
      value={sliderValue}
      marks
      onChange={(_, newValue) => setSliderValue(Number(newValue))}
      valueLabelDisplay="auto"
    />
  );
};

export default SliderComponent;
